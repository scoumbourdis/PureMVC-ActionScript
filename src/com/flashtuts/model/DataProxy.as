package com.flashtuts.model
{
	import com.flashtuts.model.vo.DataVO;
	import com.flashtuts.view.component.ImagesView;
	import com.flashtuts.view.component.ProgressView;
	import com.flashtuts.view.component.URLsView;
	
	import flash.display.LoaderInfo;
	import flash.events.Event;
	import flash.events.ProgressEvent;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.utils.Dictionary;
	
	import org.puremvc.as3.interfaces.IProxy;
	import org.puremvc.as3.patterns.proxy.Proxy;

	public class DataProxy extends Proxy implements IProxy
	{
		public static const NAME:String							= 'DataProxy';
		
		private var indexDic:Dictionary = new Dictionary();
		
		public function DataProxy()
		{
			super( NAME, new DataVO() );
		}
		
		public function urlsDataGet():void
		{
			var request:URLRequest = new URLRequest();
			var loader:URLLoader = new URLLoader();
			
			sendNotification( ProgressView.SHOW );
			
			request.url = vo.dataURL;
			
			loader.addEventListener( ProgressEvent.PROGRESS, handleProgress );			
			loader.addEventListener( Event.COMPLETE, handleURLsDataGetComplete );
			
			loader.load( request );
		}
		
		private function handleURLsDataGetComplete(e:Event):void
		{
			var data:XML = new XML( e.target.data );
			
			for each ( var url:XML in data..url )
			{
				vo.urlsArray.push( url.toString() );
				vo.urlsDataArray.push( '' );
			}
			
			sendNotification( URLsView.DATA_READY );
		}
		
		public function imagesDataGet(index:Number):void
		{
			var request:URLRequest = new URLRequest();
			var loader:URLLoader = new URLLoader();
			
			sendNotification( ProgressView.SHOW );
			
			if ( vo.urlsDataArray[ index ] == '' )
			{
				request.url = vo.urlsArray[ index ];
			
				indexDic[ loader ] = index;
				
				loader.addEventListener( ProgressEvent.PROGRESS, handleProgress );			
				loader.addEventListener( Event.COMPLETE, handleImagesDataGetComplete );
				
				loader.load( request ); trace('loading');
			}
			else
			{
				handleImagesDataGetFinished( index );trace('exists');
			}
		}
		
		private function handleImagesDataGetComplete(e:Event):void
		{
			var data:XML = new XML( e.target.data );
			
			vo.urlsDataArray[ indexDic[ e.target ] ] = data;
			
			handleImagesDataGetFinished( indexDic[ e.target ] );
		}
		
		private function handleImagesDataGetFinished(index:Number):void
		{
			sendNotification( ImagesView.DATA_READY, { index: index } );
		}
		
		private function handleProgress(e:ProgressEvent):void
		{
			sendNotification( ProgressView.UPDATE, { percent: Math.round( ( e.bytesLoaded / e.bytesTotal ) * 100 ) } );
		}
		
		public function get vo():DataVO
		{
			return data as DataVO;
		}
	}
}