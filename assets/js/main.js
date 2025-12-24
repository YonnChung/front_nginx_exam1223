// table 태그 객체를 boardList 변수에 저장
const boardList = document.getElementById("board-list");

// 게시글 데이터를 받아오기 위한 함수 구현
const getList = async ()=>{
    
  try {
    const response = await axios.get('http://localhost:8081/list');
    //console.log(response.data);

    let boards = response.data;
    let resultHTML = `<tr>
                    <th>번호</th>
                    <th>글제목</th>
                    <th>작성자</th>
                    <th>작성일자</th>
                    <th>조회수</th>
                </tr>`;

    //console.log(boards.length);
    for(let i = 0 ; i<boards.length ; i++){
        resultHTML += `<tr>
            <td>${boards[i].b_idx}</td>
            <td>${boards[i].b_title}</td>
            <td>${boards[i].b_writer}</td>
            <td>${boards[i].b_datetime}</td>
            <td>${boards[i].b_count}</td>
        </tr>`;
    }
    boardList.innerHTML = resultHTML;
  } catch (error) {
    console.error(error);
  }

}

getList();