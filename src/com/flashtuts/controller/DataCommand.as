package com.flashtuts.controller
{
	import com.flashtuts.model.DataProxy;
	import com.flashtuts.view.component.ImagesView;
	import com.flashtuts.view.component.URLsView;
	
	import org.puremvc.as3.interfaces.ICommand;
	import org.puremvc.as3.interfaces.INotification;
	import org.puremvc.as3.patterns.command.SimpleCommand;

	public class DataCommand extends SimpleCommand implements ICommand
	{
		override public function execute(notification:INotification):void
		{
			var name:String = notification.getName();
			var body:Object = notification.getBody();
			
			switch ( name )
			{
				case URLsView.DATA_GET:
				proxy.urlsDataGet();
				
				break;
				
				case ImagesView.DATA_GET:
				proxy.imagesDataGet( body.index );
				
				break;
			}
		}
		
		private function get proxy():DataProxy
		{
			return facade.retrieveProxy( DataProxy.NAME ) as DataProxy;
		}
	}
}