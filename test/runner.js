/* jshint esversion: 6 */


var stylus = require( 'stylus' ),
  fs = require('fs'),
  should = require('should'),
  nameSanitise = /[-.]/g;

var cases = fs.readdirSync( 'test/cases' )
  .filter( function ( soFile ) {
    return ~soFile.indexOf( '.styl' );
  } )
  .map( function ( soFile ) {
    return soFile.replace( '.styl', '' );
  } );

describe('Skeletonic\u2019s Test Suite', function () {
  cases.forEach( function ( sTest ) {
    var sName = sTest.replace( nameSanitise, ' ' );

    // disabled tests
    if ( sName.substr( 0, 1 ) === '_' ) {
      return;
    }

    it( sName, function ( done ) {
      var StylusPath = './test/cases/' + sTest + '.styl',
        sCssPath = './test/cases/' + sTest + '.css',
        sStylusCase = fs.readFileSync( StylusPath, 'utf8' ),
        sExpectedCss = fs.readFileSync( sCssPath, 'utf8' ),
        oStylus;

      oStylus = stylus(sStylusCase)
        .set('filename', StylusPath)
        .include(__dirname + './test/cases/*')
        .define('url', stylus.url());

      oStylus.render( function ( oError, cssActual ) {
        if ( oError ) {
          if ( oError.message.indexOf( 'expected' ) > -1 ) {
            oError.message = oError.message.substring( 0, oError.message.indexOf( 'expected' ) );
          }
          return done( oError );
        }
        cssActual
          .trim()
          .should
          .equal( sExpectedCss.trim() );
        done();
      } );
    } );
  } );
} );
