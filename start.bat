@echo off
echo Запуск локального сервера для LED Wiki...
echo Пожалуйста, не закрывайте это черное окно, пока работаете с сайтом.
start http://localhost:8000
python -m http.server 8000
pause
