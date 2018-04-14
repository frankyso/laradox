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
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-41589163-8"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-41589163-8');
    </script>

</head>
<body>
    <nav class="navbar navbar-laradox navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">
                    <img src="{{url('images/logo.svg')}}" height="40" alt="">
                </a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/discover">Discover Schema</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="https://www.facebook.com/groups/1976195106032295" target="_blank">Community</a></li>
                    @if(!Auth::check())
                    <li><a href="/auth/login">Sign In</a></li>
                    @else
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <img src="https://api.adorable.io/avatars/40/{{Auth::user()->email}}.png" class="img img-circle avatar" alt=""> Profile <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="/profile/edit">Edit Profile</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="/auth/logout">Logout</a></li>
                        </ul>
                    </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>
    @yield('content')
    <footer>
        <div class="container">
            <span class="pull-left">
                {{number_format(\App\User::count())}} Developer have joined
            </span>
            <div class="pull-right">
                Laradox.com
            </div>
        </div>
    </footer>
    <script src="{{url('js/app.js')}}"></script>
    @stack('footer')
</body>
</html>