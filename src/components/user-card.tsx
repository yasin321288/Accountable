import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserCircle } from 'lucide-react';

interface UserCardProps {
  name: string;
  email: string;
}

const getInitials = (name: string) => {
  const names = name.split(' ');
  const initials = names.map((n) => n[0]).join('');
  return initials.toUpperCase();
};

export default function UserCard({ name, email }: UserCardProps) {
  return (
    <Card className="w-full max-w-sm shadow-lg">
      <CardHeader className="items-center text-center">
        <Avatar className="h-20 w-20 mb-4">
           <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
             {getInitials(name)}
           </AvatarFallback>
        </Avatar>
        <CardTitle className="font-headline text-2xl">{name}</CardTitle>
        <CardDescription>{email}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
            <p className="text-sm text-muted-foreground italic">"Accountability is the glue that ties commitment to the result."</p>
        </div>
      </CardContent>
    </Card>
  );
}
