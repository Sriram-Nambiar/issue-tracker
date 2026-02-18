'use client'
import { Text, TextField , Callout,  Button} from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
// @ts-ignore
import SimpleMDE from "react-simplemde-editor";
// @ts-ignore
import "easymde/dist/easymde.min.css";
import { use, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
// @ts-ignore
import {zodResolver} from "@hookform/resolvers/zod";
import { createIssueSchema } from '@/app/validationsSchema';
import { set, z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';

type IssueForm = z.infer<typeof createIssueSchema>;

function NewIssuePage() {
  const { register, control, handleSubmit, formState: {errors} } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  const router = useRouter();
  const [error, setError] = useState<string | null>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color="red" className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
      <form className=' space-y-3' onSubmit={handleSubmit(async (data) => {
        try {
          setIsSubmitting(true);
          await axios.post('/api/issues', data)
          router.push('/issues')
          
        } catch (error) {
          setIsSubmitting(false);
        console.log(error.response.data);
        setError("Failed to create issue. Please check the form for errors.");
        }
      })}>
        <TextField.Root placeholder="Title" {...register("title")} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE {...field} placeholder="Description" />}
        />
       <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>Submit New  Issue{isSubmitting && <Spinner/>}</Button>
      </form>
    </div>
  )
}

export default NewIssuePage
