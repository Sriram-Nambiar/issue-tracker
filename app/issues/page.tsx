
import {Button} from "@radix-ui/themes";
import Link from 'next/link';
function issues() {
  return (
    <div>
      <Button><Link href="/issues/new">Create Issue</Link></Button>
    </div>
  )
}

export default issues
