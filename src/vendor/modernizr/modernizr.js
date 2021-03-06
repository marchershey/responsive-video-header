window.Modernizr = function ( e, t, n ) {
    var o, r, i = {},
        c = t.documentElement,
        a = "modernizr",
        u = t.createElement( a ),
        s = u.style,
        l = " -webkit- -moz- -o- -ms- ".split( " " ),
        f = "Webkit Moz O ms".split( " " ),
        d = "Webkit Moz O ms".toLowerCase().split( " " ),
        p = {},
        v = [],
        m = v.slice,
        y = function ( e, n, o, r ) {
            var i, u, s, l, f = t.createElement( "div" ),
                d = t.body,
                p = d || t.createElement( "body" )
            if ( parseInt( o, 10 ) )
                for ( ; o--; )( s = t.createElement( "div" ) ).id = r ? r[ o ] : a + ( o + 1 ), f.appendChild( s )
            return i = [ "&#173;", '<style id="s', a, '">', e, "</style>" ].join( "" ), f.id = a, ( d ? f : p ).innerHTML += i, p.appendChild( f ), d || ( p.style.background = "", p.style.overflow = "hidden", l = c.style.overflow, c.style.overflow = "hidden", c.appendChild( p ) ), u = n( f, e ), d ? f.parentNode.removeChild( f ) : ( p.parentNode.removeChild( p ), c.style.overflow = l ), !!u
        },
        b = function () {
            var e = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            }
            return function ( o, r ) {
                r = r || t.createElement( e[ o ] || "div" )
                var i = ( o = "on" + o ) in r
                return i || ( r.setAttribute || ( r = t.createElement( "div" ) ), r.setAttribute && r.removeAttribute && ( r.setAttribute( o, "" ), i = E( r[ o ], "function" ), E( r[ o ], "undefined" ) || ( r[ o ] = n ), r.removeAttribute( o ) ) ), r = null, i
            }
        }(),
        h = {}.hasOwnProperty

    function w ( e ) {
        s.cssText = e
    }

    function E ( e, t ) {
        return typeof e === t
    }

    function T ( e, t ) {
        for ( var o in e ) {
            var r = e[ o ]
            if ( !~( "" + r ).indexOf( "-" ) && s[ r ] !== n ) return "pfx" != t || r
        }
        return !1
    }

    function C ( e, t, o ) {
        var r = e.charAt( 0 ).toUpperCase() + e.slice( 1 ),
            i = ( e + " " + f.join( r + " " ) + r ).split( " " )
        return E( t, "string" ) || E( t, "undefined" ) ? T( i, t ) : function ( e, t, o ) {
            for ( var r in e ) {
                var i = t[ e[ r ] ]
                if ( i !== n ) return !1 === o ? e[ r ] : E( i, "function" ) ? i.bind( o || t ) : i
            }
            return !1
        }( i = ( e + " " + d.join( r + " " ) + r ).split( " " ), t, o )
    }
    for ( var g in r = E( h, "undefined" ) || E( h.call, "undefined" ) ? function ( e, t ) {
        return t in e && E( e.constructor.prototype[ t ], "undefined" )
    } : function ( e, t ) {
        return h.call( e, t )
    }, Function.prototype.bind || ( Function.prototype.bind = function ( e ) {
        var t = this
        if ( "function" != typeof t ) throw new TypeError
        var n = m.call( arguments, 1 ),
            o = function () {
                if ( this instanceof o ) {
                    var r = function () { }
                    r.prototype = t.prototype
                    var i = new r,
                        c = t.apply( i, n.concat( m.call( arguments ) ) )
                    return Object( c ) === c ? c : i
                }
                return t.apply( e, n.concat( m.call( arguments ) ) )
            }
        return o
    } ), p.touch = function () {
        var n
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : y( [ "@media (", l.join( "touch-enabled),(" ), a, ")", "{#modernizr{top:9px;position:absolute}}" ].join( "" ), function ( e ) {
            n = 9 === e.offsetTop
        } ), n
    }, p.video = function () {
        var e = t.createElement( "video" ),
            n = !1
        try {
            ( n = !!e.canPlayType ) && ( ( n = new Boolean( n ) ).ogg = e.canPlayType( 'video/ogg; codecs="theora"' ).replace( /^no$/, "" ), n.h264 = e.canPlayType( 'video/mp4; codecs="avc1.42E01E"' ).replace( /^no$/, "" ), n.webm = e.canPlayType( 'video/webm; codecs="vp8, vorbis"' ).replace( /^no$/, "" ) )
        } catch ( e ) { }
        return n
    }, p ) r( p, g ) && ( o = g.toLowerCase(), i[ o ] = p[ g ](), v.push( ( i[ o ] ? "" : "no-" ) + o ) )
    return i.addTest = function ( e, t ) {
        if ( "object" == typeof e )
            for ( var o in e ) r( e, o ) && i.addTest( o, e[ o ] )
        else {
            if ( e = e.toLowerCase(), i[ e ] !== n ) return i
            t = "function" == typeof t ? t() : t, "undefined" != typeof enableClasses && enableClasses && ( c.className += " " + ( t ? "" : "no-" ) + e ), i[ e ] = t
        }
        return i
    }, w( "" ), u = null, i._version = "2.7.1", i._prefixes = l, i._domPrefixes = d, i._cssomPrefixes = f, i.hasEvent = b, i.testProp = function ( e ) {
        return T( [ e ] )
    }, i.testAllProps = C, i.testStyles = y, i.prefixed = function ( e, t, n ) {
        return t ? C( e, t, n ) : C( e, "pfx" )
    }, i
}( this, this.document )
