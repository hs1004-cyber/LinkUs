import { CreateExperienceForm } from '../CreateExperienceForm'

export default function CreateExperienceFormExample() {
  return (
    <div className="p-4">
      <CreateExperienceForm 
        onSubmit={(data) => console.log('Submitted:', data)}
        onCancel={() => console.log('Cancelled')}
      />
    </div>
  )
}
