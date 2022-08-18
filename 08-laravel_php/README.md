#


## laravel & php project
<!-- crate laravel project -->
* docker-compose run --rm composer create-project --prefer-dist laravel/laravel .
<!--  -->
* docker-compose up -d --build server
* docker-compose run --rm artisan migrate