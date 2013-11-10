package com.flashtuts.view.component
{
	import flash.display.Sprite;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
	import flash.text.TextFormat;
	
	import gs.TweenLite;

	public class ProgressView extends Sprite
	{
		public static const NAME:String							= 'ProgressView';
		
		public static const SHOW:String							= NAME + 'Show';
		public static const HIDE:String							= NAME + 'Hide';
		public static const UPDATE:String						= NAME + 'Update';
		
		private var textField:TextField;
		
		public function ProgressView()
		{
			init();
		}
		
		private function init():void
		{
			var textFormat:TextFormat = new TextFormat();
			
			textFormat.color = 0xFFFFFF;
			textFormat.font = 'Arial';
			
			textField = new TextField();
			
			textField.autoSize = TextFieldAutoSize.CENTER;
			textField.defaultTextFormat = textFormat;
			textField.embedFonts = true;
			textField.text = 'Please wait...';
			textField.x = 300 - ( textField.width / 2 );
			textField.y = 200 - ( textField.height / 2 );
			
			addChild( textField );
		}
		
		public function show():void
		{
			textField.text = 'Please wait...';
			
			TweenLite.to( this, .5, { autoAlpha: 1 } );
		}
		
		public function hide():void
		{
			TweenLite.to( this, .5, { autoAlpha: 0 } );
		}
		
		public function update(percent:Number):void
		{
			textField.text = 'Loaded ' + percent + '%';
		}
	}
}