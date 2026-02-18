'use client'
import { Text, TextField ,  Button} from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
// @ts-ignore
import SimpleMDE from "react-simplemde-editor";
// @ts-ignore
import "easymde/dist/easymde.min.css";
import { use } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

function NewIssuePage() {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();

  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data) => {
      await axios.post('/api/issues', data)
      router.push('/issues')
    })}>
      <TextField.Root placeholder="Title" {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE {...field} placeholder="Description" />}
      />
      
      <Button>Submit New  Issue</Button>
    </form>
  )
}

export default NewIssuePage
