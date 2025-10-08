import { EmotionTag } from '../EmotionTag'

export default function EmotionTagExample() {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <EmotionTag emotion="행복해요" />
      <EmotionTag emotion="신나요" />
      <EmotionTag emotion="평온해요" />
      <EmotionTag emotion="생각중이에요" />
      <EmotionTag emotion="그리워요" />
    </div>
  )
}
