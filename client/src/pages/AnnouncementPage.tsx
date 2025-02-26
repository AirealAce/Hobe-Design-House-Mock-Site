import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { type Announcement } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export default function AnnouncementPage() {
  const { id } = useParams<{ id: string }>();

  const { data: announcements = [] } = useQuery<Announcement[]>({
    queryKey: ["/api/announcements"],
  });

  const announcement = announcements.find(a => a.id === parseInt(id));

  if (!announcement) {
    return (
      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{announcement.content}</h1>
        <div className="prose prose-lg">
          <p className="text-muted-foreground">
            Check out our latest offers and updates. Visit our store or contact us for more information.
          </p>
        </div>
      </div>
    </div>
  );
}
