import { ExperienceCard } from '../ExperienceCard'

export default function ExperienceCardExample() {
  return (
    <div className="max-w-md p-4">
      <ExperienceCard
        id={1}
        title="오늘 처음 가본 카페"
        content="동네에 새로 생긴 카페에 갔는데 분위기가 너무 좋았어요. 조용하고 아늑해서 책 읽기 딱 좋더라고요. 라떼도 맛있었고 직원분도 친절하셨어요."
        emotion="행복해요"
        nickname="민지"
        selfIntro="카페 탐방러"
        likesCount={12}
        commentsCount={3}
        createdAt="2시간 전"
      />
    </div>
  )
}
