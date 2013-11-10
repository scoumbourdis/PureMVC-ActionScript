package com.flashtuts.view
{
	import com.flashtuts.view.component.ImagesView;
	import com.flashtuts.view.component.ProgressView;
	import com.flashtuts.view.component.URLsView;
	
	import org.puremvc.as3.interfaces.IMediator;
	import org.puremvc.as3.interfaces.INotification;
	import org.puremvc.as3.patterns.mediator.Mediator;

	public class ApplicationMediator extends Mediator implements IMediator
	{
		public static const NAME:String							= 'ApplicationMediator';
		
		public function ApplicationMediator(viewComponent:Object=null)
		{
			super( NAME, viewComponent );
		}
		
		override public function onRegister():void
		{
			facade.registerMediator( new ProgressViewMediator( viewComponent ) );
		}
		
		override public function listNotificationInterests():Array
		{
			return [
				URLsView.DATA_READY,
				URLsView.CLICKED
			];
		}
		
		override public function handleNotification(notification:INotification):void
		{
			var name:String = notification.getName();
			var body:Object = notification.getBody();
			
			switch ( name )
			{
				case URLsView.DATA_READY:
				facade.registerMediator( new URLsViewMediator( viewComponent ) );
				
				break;
				
				case URLsView.CLICKED:
				if ( !facade.hasMediator( ImagesViewMediator.NAME ) )
				{
					facade.registerMediator( new ImagesViewMediator( viewComponent ) );
				}
				
				sendNotification( ImagesView.DATA_GET, body );				
				
				break;
			}
		}
	}
}