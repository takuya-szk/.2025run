//History.js

class History
{
	constructor()
	{
		
	}

	//html描画(初回だけで十分)
	display()
	{
		
		document.getElementById('disp').innerHTML = `
		<div class="parent">
			<div id="restart" class="child modoru">戻る</div>
		</div>

		<h2 style="text-align:center;">履歴表</h2>
		<table id="historyTable">
			<thead>
			<tr>
				<th>タイムスタンプ</th>
				<th>申請項目</th>
			</tr>
			</thead>
			<tbody>
			<!-- JavaScriptで履歴をここに追加します -->
			</tbody>
		</table>

		`;

		// ボタンにイベントリスナーを設定
        document.getElementById("restart").addEventListener('click', () => this.restart());

		dispHistory();

	}

	restart()
	{
		location.reload();
	}

}

function dispHistory()
{
	// 履歴データのサンプル
    const historyData = [
      { timestamp: '2024-06-20 10:12:34', item: '交通費申請' },
      { timestamp: '2024-06-21 09:45:10', item: '出張申請' },
      { timestamp: '2024-06-22 13:20:05', item: '備品購入申請' },
      { timestamp: '2024-06-23 17:01:22', item: '休暇申請' }
    ];

    // テーブルのtbodyを取得
    const tbody = document.querySelector('#historyTable tbody');

    // 履歴データをテーブルに追加
    historyData.forEach(entry => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${entry.timestamp}</td><td>${entry.item}</td>`;
      tbody.appendChild(tr);
    });
}

