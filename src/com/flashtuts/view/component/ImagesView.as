package com.flashtuts.view.component
{
	import flash.display.Loader;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.net.URLRequest;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
	import flash.text.TextFormat;
	
	import gs.TweenLite;

	public class ImagesView extends Sprite
	{
		public static const NAME:String							= 'ImagesView';
		
		public static const DATA_GET:String						= NAME + 'DataGet';
		public static const DATA_READY:String					= NAME + 'DataReady';
		public static const SHOW:String							= NAME + 'Show';
		public static const HIDE:String							= NAME + 'Hide';
		public static const GO_BACK_CLICKED:String				= NAME + 'GoBackClicked';
		
		public function init(images:XML):void
		{
			var maxImages:Number = 15;
			var perRow:Number = 5;
			var xRowCount:Number = 0;
			var yRowCount:Number = 0;
			var element:XML;
			var request:URLRequest;
			var loader:Loader;
			
			for ( var i:Number = 0; i < maxImages; i++ )
			{
				element = images..photo[ i ];
				
				request = new URLRequest();
				
				request.url = 'http://farm' + element.@farm + '.static.flickr.com/' + element.@server + '/' + element.@id + '_' +element.@secret + '_t.jpg';
				
				loader = new Loader();	
				
				if ( xRowCount == perRow )
				{
					xRowCount = 0;
					yRowCount++;
				}
				
				loader.contentLoaderInfo.addEventListener( Event.COMPLETE, handleLoaderComplete );
				
				loader.alpha = 1;
				loader.x = xRowCount * 120;
				loader.y = yRowCount * 120;
				
				loader.load( request );
				
				xRowCount++;
				
				addChild( loader );
			}
			
			addBackButton();
			
			alpha = 0;
		}
		
		private function handleLoaderComplete(e:Event):void
		{
			TweenLite.from( e.target.content, .5, { autoAlpha: 0 } );
		}
		
		private function addBackButton():void
		{
			var textFormat:TextFormat = new TextFormat();
			var textContainer:Sprite = new Sprite();
			var textField:TextField = new TextField();
			
			textFormat.color = 0xFFFFFF;
			textFormat.font = 'Arial';
			
			textContainer.addEventListener( MouseEvent.CLICK, handleContainerClick );
			
			textContainer.buttonMode = true;
			textContainer.graphics.lineStyle( 1, 0xFFFFFF );
			textContainer.graphics.beginFill( 0x333333 );
			textContainer.graphics.drawRoundRect( 0, 0, 150, 30, 5, 5 );
			textContainer.graphics.endFill();
			textContainer.mouseChildren = false;
			textContainer.x = 430;
			textContainer.y = 350;
			
			textField.autoSize = TextFieldAutoSize.CENTER;
			textField.defaultTextFormat = textFormat;
			textField.embedFonts = true;
			textField.text = 'Go back';
			textField.x = 75 - ( textField.width / 2 );
			textField.y = 15 - ( textField.height / 2 );
			
			textContainer.addChild( textField );
			
			addChild( textContainer );
		}
		
		private function handleContainerClick(e:MouseEvent=null):void
		{
			if ( numChildren > 0 )
			{
				for ( var i:Number = 0; i < numChildren; i++ )
				{
					removeChildAt( i );
				}
				
				handleContainerClick();
			}
			else
			{
				dispatchEvent( new Event( GO_BACK_CLICKED, true ) );
			}
		}
		
		public function show():void
		{
			TweenLite.to( this, .5, { autoAlpha: 1 } );
		}
		
		public function hide():void
		{
			TweenLite.to( this, .5, { autoAlpha: 0 } );
		}
	}
}