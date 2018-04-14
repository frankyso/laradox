<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laradox - @yield('page_title')</title>
    <link href="{{url('css/app.css')}}" rel="stylesheet">
    <meta csrf name="csrf-token" content="{{csrf_token()}}">
    <meta api name="api-token" content="{{@Auth::user()->api_token}}">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png">
    @stack('header')
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-41589163-8"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-41589163-8');
    </script>
</head>
<body id="designer-body">
    <nav class="navbar navbar-laradox navbar-logged-in navbar-static-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <ul class="nav navbar-nav navbar-left">
                    <li><a href="/"><span class="fa fa-chevron-left"></span></a></li>
                </ul>
                <a class="navbar-brand" href="/">
                    <img src="{{url('images/logo-white-icon.png')}}" height="40" alt="">
                </a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                @yield('menu')
            </div>
        </div>
    </nav>
    <div class="canvas">
    @yield('content')
    </div>
    <script src="{{url('js/app.js')}}"></script>
    @stack('footer')
</body>
</html>