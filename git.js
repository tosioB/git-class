// ----- 터미널 단축키 -  ctrl + ` ----- //


// ----- 전역에서 사용될 이름 설정 ----- //
git config --global user.name "GitHub 닉네임"


// ----- 전역에서 사용될 이메일 설정 ----- //
git config --global user.email "사용하는 이메일 주소 또는 GitHub 가입에 사용한 이메일"


// ----- 전역에 설정된 이름 설정 확인 ----- //
git config --global user.name


// ----- 전역에서 설정된  이메일 설정 확인 ----- //
git config --global user.email


// ----- 전역에 설정된 이름 삭제 ----- //
git config --global --unset user.name


// ----- 전역에 설정된 이메일 삭제 ----- //
git config --global --unset user.email


// ----- 저장소의 설정 전체 출력 ----- //
git config --list


// 로컬 저장소를 만들기 전 Git의 기본 브랜치를 master > main으로 변경한다.
// main으로 변경하는 이유는 master를 노예 역사의 잔재로 생각하고 있기 때문에 기본 Branch를 main으로 변경해서 사용한다.
// Window의 경우는 대부분 main으로 설정되어 있음(설치 시 선택할 수 있음)
// Mac의 경우는 master가 기본 설정되어 있는 경우가 많음
// ----- master에서 main으로 기본 브랜치를 변경 ----- //
git config --global init.defaultBranch main


// ----- 현재 작업 디렉토리의 상태를 보여준다. ----- //
git status


// ----- add ----- //
git add "파일명" // 지정한 파일을 Staging Area에 추가
git add . // 현재 작업 디렉토리 내의 모든 변경된 파일을 Staging Area에 추가


// ----- reset ----- //
// ***** 사용하는 경우 - 혼자만 사용하는 브랜치 & origin에 있지만 아무도 이 브랜치를 사용하지 않는다는 확신을 가지는 경우
// 리셋은 사용할 때 주의가 필요함 만약의 상황을 대비해 soft를 사용 권장
// 아예 모든 이력을 삭제하고 다시 작업을 진행해야 할 때는 hard를 사용
git reset // 이전 커밋을 취소하거나 작업 트리와 Staging Area의 상태를 변경
git reset "파일명" // 지정된 파일의 Staging Area에서의 변경 사항을 취소하고, 이전 커밋 상태로 되돌리는 작업
git reset --hard "커밋 해시" // 이전 커밋으로 되돌린 후 이후 이력들을 모두 삭제
git reset --soft "커밋 해시" // 이전 커밋으로 되돌린 후 이력들의 내용이 삭제되지 않고 stage에 올라가있어 언제든지 커밋을 진행할 수 있는 상태가 됨
git reset --mixed "커밋 해시" // 이전 커밋으로 되돌린 후 이력들의 내용이 삭제되지 않았지만 다시 커밋을 하기위해서는 다시 add 명력어를 이용해 stage에 올려 커밋을 진행
// ----- reflog ----- //
git reflog // git reset --hard를 통해 사라진 커밋 되돌리기
// 1. git reflog로 해시값 받아내기
// 2. git reset --hard 해시값 적용

// ----- rm --cached ----- //
git rm --cached "Stagin Area에 추가된 파일명" // Git에서 추적을 중단하고 Staging Area에서 파일을 제거


// ----- commit ----- //
git commit -m "커밋 메시지" // Staging Area에 있는 파일들의 변경 사항을 새로운 커밋으로 저장
git commit -am "커밋 메시지" // 수정된 모든 파일을 Staging Area에 추가하고, 그 변경 사항들을 새로운 커밋으로 저장
git commit - 커밋창열림 - i - 커밋 메시지 입력 - ESC - :qw // 커밋 메시지를 입력할 수 있는 [텍스트 편집기]가 실행


// ----- log ----- // 
git log // 저장소의 커밋 이력을 보여줌
git log -p // 각 커밋마다의 변경사항 함께 보기
git log -3 // 최근 3(n)개 커밋만 보기(자주쓰임)
git log --stat // 통계와 함께 보기
git log --oneline // 커밋 이력 한 줄 보기(자주쓰임)
git log -S "내 파일의 변경사항 단어 검색" // 파일 변경사항 내 단어 검색
git log --grep "내 커밋 메시지 단어 검색" // 커밋 메시지 단어 검색(자주쓰임)
git log --all --decorate --oneline --graph // 자주 사용되는 그래프 로그 보기


// ----- revert ----- // 
// revert는 이전 커밋을 취소하고 해당 변경 사항을 되돌린다.
// 협업할 때는 최대한 reset보다는 revert 사용을 추천한다.
// 1. git log를 사용해 해시값 알아내기
// 2. git revert 해시값


// ----- branch ----- //
git branch // 브랜치 목록
git branch 브랜치명 // 브랜치 생성
git switch 브랜치명 // 생성한 브랜치 이동
git switch -c 브랜치명 // 브랜치 생성과 동시에 이동
git branch -d 브랜치명 // 브랜치 삭제
git branch -m 브랜치명 새로운브랜치명 // 브랜치 이름 바꾸기