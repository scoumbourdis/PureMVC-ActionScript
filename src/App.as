package 
{
	import com.flashtuts.ApplicationFacade;
	
	import flash.display.GradientType;
	import flash.display.Sprite;
	import flash.geom.Matrix;
	import flash.text.Font;
	
	[SWF( width='600', height='400', frameRate='30', backgroundColor='#000000' )]
	
	public class App extends Sprite
	{	
		[Embed( systemFont='Arial', fontName='Arial', mimeType='application/x-font' )]
		private var arialFont:Class;
		
		public function App()
		{
			init();
		}
		
		private function init():void
		{
			var mat:Matrix = new Matrix();
			var bg:Sprite = new Sprite();
			
			mat.createGradientBox( stage.stageWidth, stage.stageHeight, Math.PI * .5 );
			
			bg.graphics.beginGradientFill( GradientType.LINEAR, [ 0x333333, 0x000000 ], [ 1, 1 ], [ 0, 255 ], mat );
			bg.graphics.drawRect( 0, 0, stage.stageWidth, stage.stageHeight );
			bg.graphics.endFill();
			
			addChild( bg );
			
			Font.registerFont( arialFont );
			
			ApplicationFacade.getInstance().startup( this );
		}
	}
}
