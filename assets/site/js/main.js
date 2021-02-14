(function() {
  
    window.CanvasSlideshow = function( options ) {
      //  SCOPE
      var that  =   this;

      //  OPTIONS
      options                     = options || {};
      options.stageWidth          = options.hasOwnProperty('stageWidth') ? options.stageWidth : 400;
      options.stageHeight         = options.hasOwnProperty('stageHeight') ? options.stageHeight : 1520;
      options.pixiSprites         = options.hasOwnProperty('sprites') ? options.sprites : [];
      options.autoPlay            = options.hasOwnProperty('autoPlay') ? options.autoPlay : true;
      options.autoPlaySpeed       = options.hasOwnProperty('autoPlaySpeed') ? options.autoPlaySpeed : [10, 3];
      options.displacementImage   = options.hasOwnProperty('displacementImage') ? options.displacementImage : '';
      options.interactive         = options.hasOwnProperty('interactive') ? options.interactive : false;
      options.interactionEvent    = options.hasOwnProperty('interactionEvent') ? options.interactionEvent : '';
      options.dispatchPointerOver = options.hasOwnProperty('dispatchPointerOver') ? options.dispatchPointerOver : false;

      //  PIXI VARIABLES
      var renderer            = new PIXI.autoDetectRenderer(options.stageWidth, options.stageHeight,{ transparent: true });
      var stage               = new PIXI.Container();
      var slidesContainer     = new PIXI.Container();
      var displacementSprite  = new PIXI.Sprite.fromImage( options.displacementImage );
      var displacementFilter  = new PIXI.filters.DisplacementFilter( displacementSprite );

      //  INITIALISE PIXI
      this.initPixi = function() {

        // Add canvas to the HTML
        document.querySelector('.canvas').appendChild( renderer.view );

        // Add child container to the main container 
        stage.addChild( slidesContainer );
  
        // Enable Interactions
        stage.interactive = true;
        
        // Fit renderer to the screen
        if ( options.fullScreen === false ) {
          renderer.view.style.top       = '-2%';
          renderer.view.style.mixBlendMode      = 'lighten';
        } else {
          renderer.view.style.top       = '-2%';
          renderer.view.style.mixBlendMode      = 'lighten';
        }
        
        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

        // Set the filter to stage and set some default values for the animation
        stage.filters = [displacementFilter];        

        if ( options.autoPlay === false ) {
          displacementFilter.scale.x = 0;
          displacementFilter.scale.y = 0;
        }

        if ( options.wacky === true ) {

          displacementSprite.anchor.set(0.5);
          displacementSprite.x = renderer.width / 2;
          displacementSprite.y = renderer.height / 2; 
        }

        displacementSprite.scale.x = 2;
        displacementSprite.scale.y = 2;
  
        
        stage.addChild( displacementSprite );

      };

      //  LOAD SLIDES TO CANVAS
      this.loadPixiSprites = function( sprites ) {
        
        var rSprites = options.sprites;

        for ( var i = 0; i < rSprites.length; i++ ) {
          
          var texture   = new PIXI.Texture.fromImage( sprites[i] );
          var image     = new PIXI.Sprite( texture );

          image.transform.scale.x = 0.5;
          image.transform.scale.y = 0.5;
          
          if ( i !== 0  ) {
            TweenMax.set( image, { alpha: 0 } );
          }

          slidesContainer.addChild( image );

        } 
        
      };

      //  DEFAULT RENDER/ANIMATION
      if ( options.autoPlay === true ) {

        var ticker = new PIXI.ticker.Ticker();

        ticker.autoStart = options.autoPlay;

        ticker.add(function( delta ) {
          
          displacementSprite.x += options.autoPlaySpeed[0] * delta;
          displacementSprite.y += options.autoPlaySpeed[1];
          
          renderer.render( stage );

        });

      }  else {

          var render = new PIXI.ticker.Ticker();

          render.autoStart = true;

          render.add(function( delta ) {
            renderer.render( stage );
          });        
        
      }    

      //  INIT FUNCTIONS
      this.init = function() {
        
        that.initPixi();
        that.loadPixiSprites( options.pixiSprites );

      };
      //  START 
      this.init();
    };
  })(); 