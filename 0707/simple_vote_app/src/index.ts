interface VoteOption{
  name: string, //투표 항목
  votes: number, //득표수
}

// 투표항목 추가
function createVoteOption (name: string): VoteOption {
  return {
    name,
    votes: 0
  }
}

//투표함수
function vote(option: VoteOption) : void{
  option.votes += 1;
  console.log(`${option.name}에 투표 완료! \n 현재 투표 수: ${option.votes}`)
}

//투표수 조회함수
// 입력으로 VoteOption []을 받아서 리턴은 없음 << []니까 만들어진 투표 항목들의 배열을 받아온다는 뜻
// 안에서 모든 투표의 투표수를 콘솔에 출력
function getVoteResults (options: VoteOption[]) : void{
  console.log('\n--- 투표 현황 ---');
  options.forEach(option => {
    console.log(`${option.name} 투표 수: ${option.votes}`);
  });
  console.log('---------------')
}

// 모든 투표의 최고 투표 항목을 찾아 반환하는 함수
// 동점일 경우 첫 번째 항목을 반환
// 진행중인 투표가 없는 경우, null 반환
function getWinner(options:VoteOption[]): VoteOption | null {
  if (options.length === 0){
    return null;
  }
  let winner = options[0];
  for(let a = 1; a<options.length; a++){
    if(winner.votes < options[a].votes){
      winner = options[a];
    }
  }
  return winner;
}

function main () : void {
   const menuOptions: VoteOption[] = [
    createVoteOption('김치찌개'),
    createVoteOption('된장찌개'),
    createVoteOption('제육볶음'),
    createVoteOption('돈가스'),
   ];

   //투표 진행
   vote(menuOptions[0]);
   vote(menuOptions[2]);
   vote(menuOptions[1]);
   vote(menuOptions[3]);
   vote(menuOptions[2]);
   vote(menuOptions[0]);

   //투표 현황
   getVoteResults(menuOptions);

   //우승항목 발표
   const winner = getWinner(menuOptions);
   if (winner) {
    console.log(`오늘의 점심 메뉴는 ${winner.votes}표를 받은 ${winner.name}`)
   } else {
    console.log('아직 투표된 항목이 없습니다.')
   }
}
main();