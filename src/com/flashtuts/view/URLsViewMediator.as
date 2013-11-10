package com.flashtuts.view
{
	import com.flashtuts.model.DataProxy;
	import com.flashtuts.view.component.ProgressView;
	import com.flashtuts.view.component.URLsView;
	
	import flash.events.DataEvent;
	
	import org.puremvc.as3.interfaces.IMediator;
	import org.puremvc.as3.interfaces.INotification;
	import org.puremvc.as3.patterns.mediator.Mediator;

	public class URLsViewMediator extends Mediator implements IMediator
	{
		public static const NAME:String							= 'URLsViewMediator';
		
		private var urlsView:URLsView;
		
		public function URLsViewMediator(viewComponent:Object=null)
		{
			super( NAME, viewComponent);
		}
		
		override public function onRegister():void
		{
			urlsView = new URLsView();
			
			urlsView.addEventListener( URLsView.CLICKED, handleURLsViewClicked );
			
			urlsView.init( proxy.vo.urlsArray );
			
			urlsView.show();
			
			viewComponent.addChild( urlsView );
			
			sendNotification( ProgressView.HIDE );
		}
		
		override public function listNotificationInterests():Array
		{
			return [
				URLsView.SHOW
			];
		}
		
		override public function handleNotification(notification:INotification):void
		{
			var name:String = notification.getName();
			var body:Object = notification.getBody();
			
			switch ( name )
			{
				case URLsView.SHOW:
				urlsView.show();
				
				break;
			}
		}
		
		private function handleURLsViewClicked(e:DataEvent):void
		{
			urlsView.hide();
			
			sendNotification( URLsView.CLICKED, { index: e.data } );
		}
		
		private function get proxy():DataProxy
		{
			return facade.retrieveProxy( DataProxy.NAME ) as DataProxy;
		}
	}
}