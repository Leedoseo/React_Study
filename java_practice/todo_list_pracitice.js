// 상태 관리
let todos = [];
let currentFilter = "all";
let nextId = 1;

// DOM 요소 선택
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const filterContainer = document.getElementById("filter");
const stats = document.getElementById("stats");

// 함수 정의

/*
 새로운 할 일을 추가하는 함수
 - 입력값이 비어있으면 경고 표시
 - 새 할 일 객체를 생성해서 todos 배열에 추가
 - 화면을 다시 렌더링하고 입력 필드 초기화
 */
function addTodo() {
  const text = input.value.trim();

  // 빈 값 체크
  if (!text) {
    alert("할 일을 입력해주세요!");
    return;
  }

  // 새 할 일 객체 생성
  const newTodo = {
    id: nextId++,
    text: text,
    completed: false,
    createdAt: new Date(),
  };

  // 배열에 추가
  todos.push(newTodo);

  // 화면 업데이트
  render();

  // 입력 필드 초기화
  input.value = "";
  input.focus();
}

/*
 할 일을 삭제하는 함수
 - @param {number} id - 삭제할 할 일의 id
 - filter 고차함수를 사용해서 해당 id를 제외한 새 배열 생성
 - 원본 배열을 직접 수정하지 않고 새 배열로 교체 (불변성)
 */
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

/*
 완료 상태를 토글하는 함수
 - @param {number} id - 토글할 할 일의 id
 
 - map 고차함수를 사용해서 해당 id의 completed 값만 반전
 - 스프레드 연산자(...)로 기존 객체를 복사하고 completed만 변경
 */
function toggleComplete(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      // 해당 id인 경우: completed 값을 반전시킨 새 객체 반환
      return { ...todo, completed: !todo.completed };
    }
    // 해당 id가 아닌 경우: 그대로 반환
    return todo;
  });
  render();
}

/*
 현재 필터에 맞는 할 일 목록을 반환하는 함수
 - @returns {Array} 필터링된 할 일 배열
 - filter 고차함수를 사용해서 조건에 맞는 항목만 추출
 */
function getFilteredTodos() {
  switch (currentFilter) {
    case "active":
      // completed가 false인 것만 (진행중)
      return todos.filter((todo) => !todo.completed);
    case "completed":
      // completed가 true인 것만 (완료)
      return todos.filter((todo) => todo.completed);
    default:
      // 전체
      return todos;
  }
}

/*
 화면을 렌더링하는 함수
 - map 고차함수를 사용해서 todo 배열을 HTML 문자열 배열로 변환
 - join('')으로 배열을 하나의 문자열로 합침
 - innerHTML로 DOM에 반영
 */
function render() {
  const filteredTodos = getFilteredTodos();

  // 할 일이 없는 경우
  if (filteredTodos.length === 0) {
    todoList.innerHTML = '<li class="empty-message">할 일이 없습니다 🎉</li>';
    updateStats();
    return;
  }

  // map으로 각 todo를 HTML 문자열로 변환
  const todoHTML = filteredTodos.map(
    (todo) => `
        <li data-id="${todo.id}">
            <span class="todo-text ${todo.completed ? "completed" : ""}">
                ${todo.text}
            </span>
            <div class="btn-group">
                <button class="complete-btn">
                    ${todo.completed ? "↩️" : "✅"}
                </button>
                <button class="delete-btn">🗑️</button>
            </div>
        </li>
    `
  );

  // join으로 배열을 문자열로 합쳐서 innerHTML에 할당
  todoList.innerHTML = todoHTML.join("");

  // 통계 업데이트
  updateStats();
}

/*
 통계를 업데이트하는 함수
  
 - filter 고차함수로 완료된 항목 개수를 계산
 */
function updateStats() {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const active = total - completed;

  stats.textContent = `전체: ${total}개 | 진행중: ${active}개 | 완료: ${completed}개`;
}

/*
 필터 버튼의 활성화 상태를 업데이트하는 함수 
 - querySelectorAll + forEach로 모든 버튼 순회
 - classList로 active 클래스 추가/제거
 */
function updateFilterButtons() {
  // 모든 버튼에서 active 클래스 제거
  filterContainer.querySelectorAll("button").forEach((btn) => {
    btn.classList.remove("active");
  });

  // 현재 필터에 해당하는 버튼에 active 클래스 추가
  const activeBtn = filterContainer.querySelector(
    `[data-filter="${currentFilter}"]`
  );
  activeBtn.classList.add("active");
}

// 이벤트 리스너 등록

// 추가 버튼 클릭 이벤트
addBtn.addEventListener("click", addTodo);

/*
 - Enter 키로 추가하기
 - keydown 이벤트에서 e.key로 어떤 키가 눌렸는지 확인
 */
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

/*
 이벤트 위임: 할 일 목록의 버튼 클릭 처리
 - 부모 요소(ul)에 하나의 이벤트 리스너만 등록
 - e.target으로 실제 클릭된 요소 확인
 - closest('li')로 클릭된 버튼이 속한 li 요소 찾기
 - dataset.id로 해당 할 일의 id 가져오기
 */
todoList.addEventListener("click", function (e) {
  // 가장 가까운 li 요소 찾기
  const li = e.target.closest("li");
  if (!li) return;

  // data-id 속성에서 id 가져오기 (문자열 → 숫자 변환)
  const id = parseInt(li.dataset.id);

  // 클릭된 버튼에 따라 다른 동작 수행
  if (e.target.classList.contains("complete-btn")) {
    toggleComplete(id);
  }

  if (e.target.classList.contains("delete-btn")) {
    deleteTodo(id);
  }
});

/*
 이벤트 위임: 필터 버튼 클릭 처리
 - data-filter 속성으로 어떤 필터인지 구분
 */
filterContainer.addEventListener("click", function (e) {
  // 버튼이 아니면 무시
  if (e.target.tagName !== "BUTTON") return;

  // 클릭된 버튼의 data-filter 값을 현재 필터로 설정
  currentFilter = e.target.dataset.filter;

  // 버튼 상태 업데이트
  updateFilterButtons();

  // 화면 다시 렌더링
  render();
});

// 초기 렌더링
render();
