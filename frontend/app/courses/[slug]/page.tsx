import Navbar from "@/components/Navbar";
import Image from "next/image";
import CourseDetailClient from "@/components/CourseDetailClient";
import { getCourseBySlug, type Course } from "@/lib/api";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug);
  return {
    title: course ? `${course.title} | Longtrade Academy` : "Course | Longtrade Academy",
  };
}

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug);

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="container-narrow pt-28 pb-16">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold">ไม่พบคอร์ส</h1>
            <p className="text-white/60 mt-2">คอร์สที่คุณค้นหาอาจถูกลบหรือไม่มีอยู่จริง</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container-narrow pt-28 pb-16">
        {/* Cover + Title */}
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <div className="relative h-[280px] md:h-[360px]">
            <Image
              src={course.cover || '/Herocard.png'}
              alt={course.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 bg-gradient-to-t from-black/60 to-transparent">
              <h1 className="text-2xl md:text-3xl font-extrabold">{course.title}</h1>
            </div>
          </div>
        </div>

        {/* Detail + Lessons (Client Part) */}
        <CourseDetailClient course={course} />
      </main>
    </>
  );
}
