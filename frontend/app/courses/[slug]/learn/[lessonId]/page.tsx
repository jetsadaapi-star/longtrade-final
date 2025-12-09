// app/courses/[slug]/learn/[lessonId]/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getCourseBySlug, type Course } from "@/lib/api";
import Navbar from "@/components/Navbar";

/** localStorage keys */
const kUnlock = (slug: string) => `unlock:${slug}`;
const kDone = (slug: string, id: string) => `done:${slug}:${id}`;

export default function LessonPlayerPage() {
  const { slug, lessonId } = useParams<{ slug: string; lessonId: string }>();
  const router = useRouter();

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [unlocked, setUnlocked] = useState(false);

  // Fetch course data
  useEffect(() => {
    async function fetchCourse() {
      setLoading(true);
      const data = await getCourseBySlug(slug);
      setCourse(data);
      setLoading(false);
    }
    fetchCourse();
  }, [slug]);

  // Check unlock status
  useEffect(() => {
    setUnlocked(typeof window !== "undefined" && localStorage.getItem(kUnlock(slug)) === "1");
  }, [slug]);

  const flat = useMemo(() => {
    if (!course?.sections) return [];
    return course.sections.flatMap((s) => s.lessons);
  }, [course]);

  const index = flat.findIndex((l) => l.id === lessonId);
  const lesson = flat[index];

  // Mark lesson as done
  useEffect(() => {
    if (!lesson) return;
    if (typeof window === "undefined") return;
    localStorage.setItem(kDone(slug, lesson.id), "1");
  }, [slug, lesson]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="container-narrow pt-28 pb-16">
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        </main>
      </>
    );
  }

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="container-narrow pt-28 pb-16">
          <h1 className="text-2xl font-bold">ไม่พบคอร์สเรียน</h1>
          <p className="opacity-70 mt-2">กรุณาตรวจสอบ URL หรือกลับไปหน้าหลัก</p>
        </main>
      </>
    );
  }

  if (!course.sections || course.sections.length === 0) {
    return (
      <>
        <Navbar />
        <main className="container-narrow pt-28 pb-16">
          <h1 className="text-2xl font-bold">คอร์สยังไม่มีเนื้อหา</h1>
          <p className="opacity-70 mt-2">คอร์สนี้ยังไม่มีบทเรียน กรุณากลับมาใหม่ภายหลัง</p>
        </main>
      </>
    );
  }

  if (!lesson) {
    return (
      <>
        <Navbar />
        <main className="container-narrow pt-28 pb-16">
          <h1 className="text-2xl font-bold">ไม่พบเนื้อหาบทเรียน</h1>
          <p className="opacity-70 mt-2">บทเรียนที่คุณต้องการไม่มีอยู่ในระบบ</p>
        </main>
      </>
    );
  }

  if (!unlocked) {
    return (
      <>
        <Navbar />
        <main className="container-narrow pt-28 pb-16">
          <h1 className="text-2xl font-bold">เนื้อหายังล็อกอยู่</h1>
          <p className="opacity-70 mt-2">
            กรุณากลับไปหน้าคอร์ส (<span className="font-medium">{course.title}</span>) และปลดล็อกด้วยรหัสก่อนนะครับ
          </p>
          <button
            onClick={() => router.push(`/courses/${slug}`)}
            className="mt-4 btn-red"
          >
            กลับไปหน้าคอร์ส
          </button>
        </main>
      </>
    );
  }

  const prev = index > 0 ? flat[index - 1] : null;
  const next = index < flat.length - 1 ? flat[index + 1] : null;

  // Get video data from lesson
  let video = lesson.video;

  // Fallback: Construct video object if missing but raw fields exist
  if (!video && lesson.video_type === 'upload' && lesson.video_file) {
    const storageUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api/v1', '/storage') || 'http://localhost:8000/storage';
    // Handle both full URL and relative path
    const videoUrl = lesson.video_file.startsWith('http')
      ? lesson.video_file
      : `${storageUrl}/${lesson.video_file}`;

    video = {
      type: 'upload',
      video_url: videoUrl,
      status: 'ready'
    };
  }

  const youtubeId = video?.youtube_id || lesson.youtubeId || lesson.videoId;

  return (
    <>
      <Navbar />
      <main className="container-narrow pt-28 pb-16 space-y-6">
        <h1 className="text-2xl md:text-3xl font-extrabold">{course.title}</h1>
        <div className="text-white/80">บทเรียน: {lesson.title}</div>

        {/* Video Player */}
        {video && video.type === 'upload' && video.video_url ? (
          // HTML5 Video Player for uploaded videos
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
            <video
              className="w-full h-full"
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              poster={video.thumbnail_url || undefined}
              preload="metadata"
            >
              <source src={video.video_url} type="video/mp4" />
              <source src={video.video_url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            {/* Prevent right-click overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ) : youtubeId ? (
          // YouTube Player
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?modestbranding=1&rel=0&iv_load_policy=3&fs=0&color=white`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen={false}
                sandbox="allow-same-origin allow-scripts allow-presentation"
                title={lesson.title}
              />
            </div>
            {/* Prevent right-click */}
            <div className="pointer-events-none absolute inset-0" />
          </div>
        ) : (
          // No video available
          <div className="glass rounded-2xl p-8 border border-white/10 text-center">
            <p className="text-white/70">ยังไม่มีวิดีโอสำหรับบทเรียนนี้</p>
          </div>
        )}


        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            disabled={!prev}
            onClick={() => prev && router.push(`/courses/${slug}/learn/${prev.id}`)}
            className="btn-ghost disabled:opacity-50"
          >
            ← บทก่อนหน้า
          </button>
          <button
            disabled={!next}
            onClick={() => next && router.push(`/courses/${slug}/learn/${next.id}`)}
            className="btn-red disabled:opacity-50"
          >
            บทถัดไป →
          </button>
        </div>

        {/* Quiz Section - Show on last lesson */}
        {index === flat.length - 1 && course.quiz && (
          <div className="glass rounded-2xl p-5 border border-white/10">
            <div className="font-semibold">ทดสอบหลังเรียน</div>
            <p className="text-sm opacity-80 mt-1">
              เมื่อทำแบบทดสอบผ่าน จะสามารถขอรับ Certificate จาก Longtrade Academy
            </p>
            <button
              onClick={() => router.push(`/courses/${slug}/quiz`)}
              className="mt-3 btn-ghost"
            >
              ไปทำแบบทดสอบ
            </button>
          </div>
        )}
      </main>
    </>
  );
}
