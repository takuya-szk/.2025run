//Title.js

class Title
{
	constructor()
	{
		

	}

	//html描画(初回だけで十分)
	display(leftPos)
	{
		document.getElementById('disp').innerHTML = `

		<div class="menu-wrapper">
		<input type="checkbox" id="menu-toggle" hidden>
		
		<label class="menu-icon" for="menu-toggle">
			<span></span>
			<span></span>
			<span></span>
		</label>
		
		<div class="overlay"></div>
		
		<nav class="menu">
			<ul>
			<li onClick="gm.setKey('Enter')">推移を見る</li>
			<li onClick="gm.setKey('h')">入力履歴を見る</li>
			<li onClick="alert('バージョン情報: 1.0.0')">バージョン</li>
			<li><a href="#">問い合わせ</a></li>
			</ul>
		</nav>
		</div>

	
	
		<div class="parent">
			<h1 class="child title">目指せ2026km!!</h1>
			<div class="child userName">こんにちは。太郎さん<div>
			<div class="child currentDistance">現在：12km<div>
			<div class="child totalDistance">全員：120km<div>
			
			
			<select id="item" name="item" class="child itemSelect">
				<option value="">-- 選択してください --</option>
				<option value="1">聖書1章:2km</option>
				<option value="2">賛美1曲:2km</option>
				<option value="3">祈り5分:2km</option>
				<option value="4">先生の詩を読む:2km</option>
				<option value="5">先生の詩を書く:2km</option>
				<option value="6">箴言を読む:2km</option>
				<option value="7">箴言を書く:2km</option>
				<option value="8">5分掃除:2km</option>
				<option value="9">走り1キロ:1km</option>
				<option value="10">自転車1キロ:1km</option>
				<option value="11">勉強5分:1km</option>
				<option value="12">リフティング100回:1km</option>
				<option value="13">バスケシュート20本ゴール:1km</option>
				<option value="14">サッカーシュート20本ゴール:1km</option>
				<option value="99">修正-1</option>
			</select>
		
			<div class="child apply" onClick="apply()">申請する<div>
		</div>
		
		`;
		
	}
}

function apply()
{
	const url = "https://script.google.com/macros/s/AKfycbyQ0mg8nZlaMJU-VG42Kabg-QV8ihYADgP4hdiuvjXUSZnnVjuiijkhckUpcV-Pz1BrZA/exec";

	const requestParams = {
	  method: "GET",
	  headers: {
	    "Accept": "application/json",
	    "Content-Type": "application/x-www-form-urlencoded",
	  },
	};
	
	fetch(url, requestParams)
	  .then((response) => response.json())
	  .then((result) => {
	    console.log(result); // {"status":"OK"}が返ってくる
	  })
	  .catch((e) => console.log(e));

}
