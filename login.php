
<?php
var_dump($_REQUEST);
?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
	<title>Visioner</title>
	<link rel="stylesheet" href="/libs/style-libs.css">
	<link rel="stylesheet" href="/css/main.css">
	
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/visioner.js"></script>
	
	<script>
		$(document).ready(function() {
			$( "#login_btn" ).click(function() {
				var user_email = $( "#login_email" ).val()
				var user_pass1 = $( "#login_password" ).val()
				
				$.ajax({
					url: "php/server_login.php",
					type: "POST",
					dataType: "html",
					data: {
						login: user_email,
						password: user_pass1
					},
					beforeSend: function (xhr) {
						xhr.overrideMimeType("text/plain; charset=x-user-defined");
					}
				}).done(function (data) {
					if (data == "OK") {
						window.location = 'index';
					}else{
						$( "#login_email" ).addClass('error');
						$( "#login_password" ).addClass('error');
					}
				});
				
				//alert('Тут буде реєстрація через Facebook. Поки цей функціонал не доступний.');
			});
			
			$( "#register_facebook" ).click(function() {
				alert('Тут буде реєстрація через Facebook. Поки цей функціонал не доступний.');
			});

			$( "#create_new_account_form" ).submit(function( event ) {
				event.preventDefault();
				
				var user_first = $( "#user_first" ).val()
				var user_last = $( "#user_last" ).val()
				var user_email = $( "#user_email" ).val()
				var user_phone = $( "#user_phone" ).val()
				var user_pass1 = $( "#user_pass1" ).val()
				var user_pass2 = $( "#user_pass2" ).val()
				var user_day = $( "#user_day" ).val()
				var user_month = $( "#user_month" ).val()
				var user_year = $( "#user_year" ).val();
				
				var user_sex = 0;
				if ($( "#switcher-indicator" ).hasClass('top')){
					user_sex = 1;
				}else{
					user_sex = 2;
				}
				
				if (user_first.length<3){
					$( "#user_first" ).addClass('error');
				}else{
					if (user_last.length<3){
						$( "#user_last" ).addClass('error');
					}else{
						if (!isValidEmailAddress(user_email)||user_email.length<5){
							$( "#user_email" ).addClass('error');
						}else{
							if ((user_phone.length<5)||(!isValidNumber(user_phone))){
								$( "#user_phone" ).addClass('error');
							}else{
								if (isValidPassword(user_pass1)){
									alert("Мінімальна довжина пароля 9 символів.")
								}else{
									if ((user_pass1!=user_pass2)&&(user_pass1.length>4)){
										$( "#user_pass2" ).addClass('error');
									}else{
										regUser(user_first, user_last, user_email, user_phone, user_pass1, user_day, user_month, user_year, user_sex);
									}
								}
							}
						}
					}
				}
			});
			
			$( "input" ).focusout(function() {
				$(this).removeClass('error');
			});
			
			function isValidNumber(phoneNumber) {
				var numericReg = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
				return numericReg.test(phoneNumber);
			}
		
			function isValidEmailAddress(emailAddress) {
				var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
				return pattern.test(emailAddress);
			}
			
			function isValidPassword(password) {
				var numericReg = /^([a-zA-Z0-9]{0,8})$/;
				return numericReg.test(password);
			}
			
		});
	</script>
</head>
	<body ng-app="visionerApp">
		<div class="dev-wrapper" ng-controller="mainController">
		<header>
			<div class="container">
				<div class="navbar navbar-default row">
					<div class="header-logo col-xs-14 col-sm-4 col-md-3 col-lg-3">
						<div class="row">
							<img src="img/logo.png" alt="Visioner logo">
						</div>
					</div>
					<div class="header-user col-xs-14 col-sm-10 col-md-7 col-lg-6 col-lg-offset-5 align-left">
						<form action="" class="sign-in" onsubmit="return false;">
							<div class="input-email">
								<input id="login_email" type="email" placeholder="Моя ел. адреса">
								<!--
								<a href="#" class="enter-with-facebook">Увійти з facebook</a>
								-->
							</div>
							<div class="input-password">
								<input id="login_password" type="password" placeholder="Мій пароль">
								<a href="#" class="forgot-pass">Забули пароль?</a>
							</div>
							<button id="login_btn" class="btn">Вхід</button>
						</form>
						<div class="language-switcher-container" ng-controller="languageSwitcherCtrl">
							<div class="switcher" ng-click="openSwitcher()"><span>{{currentLanguage.name}}</span></div>
							<ul class="language-switcher dropdown" ng-if="switcherStatus == 'opened'">
								<li class="lanhuage-select" ng-repeat="lang in languages" ng-click="changeLanguage(lang)"><span class="abbr">{{lang.name}}</span><span class="description">{{lang.description}}</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
		<section class="start container">
				<div class="row">
					<div class="description col-lg-8 col-md-7">
						<h2>Visioner - платформа для особистісного та професійного розвитку:</h2>
						<ul>
							<li>знаходь нові корисні матеріали для саморозвитку<br>(статті, книги, відео, думки, заходи)</li>
							<li>самовдосконалюйся особистісно та професійно щодня (саморозвиток має стати звичкою)</li>
							<li>ділися з іншими тим, чим розвиваєшся<br>(роби світ розумнішим)</li>
							<li>шукай своїх візіонерів і дізнавайся як вони розвиваються (слідуй найкращим практикам)</li>
						</ul>
						<p>Чи знаєш, що <span>понад 70%</span> успішних людей займаються саморозвитком щоденно.</p>
						<p>Стань одним із них сьогодні!</p>
					</div>
					<div class="col-lg-6 col-md-7">
						<h1>Реєстрація</h1>
						<a id="register_facebook" href="" class="register-with-facebook btn big blue">Зареєструватись з facebook</a>
						<form id="create_new_account_form" action="#" method="post" class="regisration-form" onsubmit="return false;">
							<input id="user_first" type="text" placeholder="Ім’я">
							<input id="user_last" type="text" placeholder="Прізвище">
							<input id="user_email" type="email" placeholder="Ваша електронна адреса">
							<input id="user_phone" type="tel" placeholder="Ваш номер мобільного телефону">
							<input id="user_pass1" type="password" placeholder="Пароль">
							<input id="user_pass2" type="password" placeholder="Підвердіть пароль">
							<p>Дата народження</p>
							<div class="date-of-birth">
								<div class="day">
									<select name="day" id="user_day">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
										<option value="24">24</option>
										<option value="25">25</option>
										<option value="26">26</option>
										<option value="27">27</option>
										<option value="28">28</option>
										<option value="29">29</option>
										<option value="30">30</option>
										<option value="31">31</option>
									</select>
								</div>
								<div class="month">
									<select name="month" id="user_month">
										<option value="1">Січень</option>
										<option value="2">Лютий</option>
										<option value="3">Березень</option>
										<option value="4">Квітень</option>
										<option value="5">Травень</option>
										<option value="6">Червень</option>
										<option value="7">Липень</option>
										<option value="8">Серпень</option>
										<option value="9">Вересень</option>
										<option value="10">Жовтень</option>
										<option value="11">Листопад</option>
										<option value="12">Грудень</option>
									</select>
								</div>
								<div class="year">
									<select name="year" id="user_year">
										<option value="1960">1940</option>
										<option value="1961">1941</option>
										<option value="1962">1942</option>
										<option value="1963">1943</option>
										<option value="1964">1944</option>
										<option value="1965">1945</option>
										<option value="1966">1946</option>
										<option value="1967">1947</option>
										<option value="1968">1948</option>
										<option value="1969">1949</option>
										<option value="1960">1950</option>
										<option value="1961">1951</option>
										<option value="1962">1952</option>
										<option value="1963">1953</option>
										<option value="1964">1954</option>
										<option value="1965">1955</option>
										<option value="1966">1956</option>
										<option value="1967">1957</option>
										<option value="1968">1958</option>
										<option value="1969">1959</option>
										<option value="1960">1960</option>
										<option value="1961">1961</option>
										<option value="1962">1962</option>
										<option value="1963">1963</option>
										<option value="1964">1964</option>
										<option value="1965">1965</option>
										<option value="1966">1966</option>
										<option value="1967">1967</option>
										<option value="1968">1968</option>
										<option value="1969">1969</option>
										<option value="1970">1970</option>
										<option value="1971">1971</option>
										<option value="1972">1972</option>
										<option value="1973">1973</option>
										<option value="1974">1974</option>
										<option value="1975">1975</option>
										<option value="1976">1976</option>
										<option value="1977">1977</option>
										<option value="1978">1978</option>
										<option value="1979">1979</option>
										<option value="1980">1980</option>
										<option value="1981">1981</option>
										<option value="1982">1982</option>
										<option value="1983">1983</option>
										<option value="1984">1984</option>
										<option value="1985">1985</option>
										<option value="1986">1986</option>
										<option value="1987">1987</option>
										<option value="1988">1988</option>
										<option value="1989">1989</option>
										<option value="1990">1990</option>
										<option value="1991">1991</option>
										<option value="1992">1992</option>
										<option value="1993">1993</option>
										<option value="1994">1994</option>
										<option value="1995">1995</option>
										<option value="1996">1996</option>
										<option value="1997">1997</option>
										<option value="1998">1998</option>
										<option value="1999">1999</option>
										<option value="2000">2000</option>
										<option value="2001">2001</option>
										<option value="2002">2002</option>
										<option value="2003">2003</option>
										<option value="2004">2004</option>
										<option value="2005">2005</option>
										<option value="2006">2006</option>
										<option value="2007">2007</option>
										<option value="2008">2008</option>
										<option value="2009">2009</option>
									</select>
								</div>
								<div class="search-switcher">
									<div class="switcher-line"><div id="switcher-indicator" class="top user_sex" data-search="search-people"></div></div>
									<div class="switcher-text">
										<div id="search-people">Жінка</div>
										<div id="search-content">Чоловік</div>
									</div>
								</div>
							</div>
							<p class="agreement"><span>Натискаючи на “Створити акаунт” Ви погоджуєтесь з нашими умовами використання ресурсу та умовами використання даних.</span></p>
							<button id="create_account" class="btn" onclick="form.submit()">Створити акаунт</button>
						</form>
					</div>
				</div>
			</section>
	</div>
		<script src="libs/libs.js"></script>
		<script src="js/main.js"></script>
	</body>
</html>