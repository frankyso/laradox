<!DOCTYPE html>
<html lang="en" class="authentication">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laradox - @yield('page_title')</title>
    <link href="{{url('css/app.css')}}" rel="stylesheet">
    <meta csrf name="csrf-token" content="{{csrf_token()}}">
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
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="row">
                    <div class="text-center auth-logo">
                        <a href="/">
                            <img height="55" src="{{url('images/logo-white.svg')}}" alt="">
                        </a>
                    </div>
                    <div class="auth-container">
                        @yield('content')
                    </div>
                    @yield('footer-content')
                </div>
            </div>
        </div>
    </div>
    <script src="{{url('js/app.js')}}"></script>
    @stack('footer')
</body>
</html>