'use client'
import { Text, TextField ,  Button} from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
// @ts-ignore
import "easymde/dist/easymde.min.css";

function NewIssuePage() {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder="Title">
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Issue</Button>

    </div>
  )
}

export default NewIssuePage
