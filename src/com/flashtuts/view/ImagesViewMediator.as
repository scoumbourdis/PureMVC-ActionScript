package com.flashtuts.view
{
	import com.flashtuts.model.DataProxy;
	import com.flashtuts.view.component.ImagesView;
	import com.flashtuts.view.component.ProgressView;
	import com.flashtuts.view.component.URLsView;
	
	import flash.events.Event;
	
	import org.puremvc.as3.interfaces.IMediator;
	import org.puremvc.as3.interfaces.INotification;
	import org.puremvc.as3.patterns.mediator.Mediator;

	public class ImagesViewMediator extends Mediator implements IMediator
	{
		public static const NAME:String							= 'ImagesViewMediator';
		
		private var imagesView:ImagesView;
		
		public function ImagesViewMediator(viewComponent:Object=null)
		{
			super( NAME, viewComponent );
		}
		
		override public function onRegister():void
		{
			imagesView = new ImagesView();
			
			imagesView.addEventListener( ImagesView.GO_BACK_CLICKED, handleImagesViewGoBackClicked );
			
			viewComponent.addChild( imagesView );
		}
		
		override public function listNotificationInterests():Array
		{
			return [
				ImagesView.DATA_READY
			];
		}
		
		override public function handleNotification(notification:INotification):void
		{
			var name:String = notification.getName();
			var body:Object = notification.getBody();
			
			switch ( name )
			{
				case ImagesView.DATA_READY:
				imagesView.init( proxy.vo.urlsDataArray[ body.index ] );
				
				imagesView.show();
				
				sendNotification( ProgressView.HIDE );
				
				break;
			}
		}
		
		private function handleImagesViewGoBackClicked(e:Event):void
		{
			imagesView.hide();
			
			sendNotification( URLsView.SHOW );
		}
		
		private function get proxy():DataProxy
		{
			return facade.retrieveProxy( DataProxy.NAME ) as DataProxy;
		}
	}
}