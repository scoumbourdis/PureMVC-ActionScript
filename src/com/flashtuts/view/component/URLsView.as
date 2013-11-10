package com.flashtuts.view.component
{
	import flash.display.Sprite;
	import flash.events.DataEvent;
	import flash.events.MouseEvent;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
	import flash.text.TextFormat;
	
	import gs.TweenLite;

	public class URLsView extends Sprite
	{
		public static const NAME:String							= 'URLsView';
		
		public static const DATA_GET:String						= NAME + 'DataGet';
		public static const DATA_READY:String					= NAME + 'DataReady';
		public static const SHOW:String							= NAME + 'Show';
		public static const HIDE:String							= NAME + 'Hide';
		public static const CLICKED:String						= NAME + 'Clicked';
		
		public function init(urls:Array):void
		{
			var i:Number = 0;
			var textFormat:TextFormat = new TextFormat();
			var textContainer:Sprite;
			var textField:TextField;
			
			textFormat.color = 0xFFFFFF;
			textFormat.font = 'Arial';
			
			for each ( var url:String in urls )
			{
				textContainer = new Sprite();
				
				textContainer.addEventListener( MouseEvent.CLICK, handleContainerClick );
				
				textContainer.buttonMode = true;
				textContainer.graphics.lineStyle( 1, 0xFFFFFF );
				textContainer.graphics.beginFill( 0x333333 );
				textContainer.graphics.drawRoundRect( 0, 0, 150, 30, 5, 5 );
				textContainer.graphics.endFill();
				textContainer.mouseChildren = false;
				textContainer.y = i * 40;
				
				textField = new TextField();
				
				textField.autoSize = TextFieldAutoSize.CENTER;
				textField.defaultTextFormat = textFormat;
				textField.embedFonts = true;
				textField.text = 'Select URL ' + ( ++i );
				textField.x = 75 - ( textField.width / 2 );
				textField.y = 15 - ( textField.height / 2 );
				
				textContainer.addChild( textField );
				
				addChild( textContainer );
			}
			
			alpha = 0;
			x = 300 - ( width / 2 );
			y = 200 - ( height / 2 );
		}
		
		public function show():void
		{
			TweenLite.to( this, .5, { autoAlpha: 1 } );
		}
		
		public function hide():void
		{
			TweenLite.to( this, .5, { autoAlpha: 0 } );
		}
		
		private function handleContainerClick(e:MouseEvent):void
		{
			var index:Number = getChildIndex( e.target as Sprite );
			
			dispatchEvent( new DataEvent( CLICKED, true, false, index.toString() ) );
		}
	}
}