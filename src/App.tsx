import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Values } from "./components/Values";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { LatestHighlights } from "./components/LatestHighlights";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { Events } from "./components/Events";
import { EventDetail } from "./components/EventDetail";
import { Courses } from "./components/Courses";
import { CourseDetail } from "./components/CourseDetail";
import { Publications } from "./components/Publications";
import { PublicationDetail } from "./components/PublicationsDetail";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import { About } from "./components/About";
import { AboutMember } from "./components/AboutMember";
import { License } from "./components/License";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";
import { CursorEffect } from "./components/CursorEffect";
import { LoadingScreen } from "./components/LoadingScreen";
import { SEO, OrganizationSchema } from "./components/SEO";
import { useLanguage } from "./components/LanguageProvider";
import { useState, useEffect, useRef } from "react";
import { blogPosts } from "../content/blogPosts";
import { projects } from "../content/projects";
import { courses } from "../content/courses";
import { events } from "../content/events";
import { members } from "../content/members";
import { publications } from "../content/publications";

type ViewType =
  | "home"
  | "blog"
  | "blogPost"
  | "events"
  | "eventDetail"
  | "courses"
  | "courseDetail"
  | "publications"
  | "publicationDetail"
  | "projects"
  | "projectDetail"
  | "about"
  | "aboutMember"
  | "license";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>("home");
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);
  const [selectedPublicationId, setSelectedPublicationId] = useState<number | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const scrollPositions = useRef<Record<string, number>>({});

  useEffect(() => {
    const criticalImages = [
      "/home/lukas-DTochqoK3Rg-unsplash.jpg",
      "/home/lukas-NLSXFjl_nhc-unsplash.jpg",
      "/home/lukas-uZkHtWsi2dE-unsplash.jpg",
      "/home/vishnu-mohanan-eaDwf4UAEhk-unsplash.jpg",
      "/home/harrison-broadbent-1mu9gF8OhNk-unsplash.jpg",
      "/home/LIDSOLlogo.svg",
    ];

    let loaded = 0;
    const total = criticalImages.length;
    let cancelled = false;

    if (total === 0) {
      setIsLoading(false);
      return;
    }

    const onLoad = () => {
      if (cancelled) return;
      loaded++;
      setLoadProgress(loaded / total);
      if (loaded >= total) {
        setIsLoading(false);
      }
    };

    criticalImages.forEach((src) => {
      const img = new Image();
      img.onload = onLoad;
      img.onerror = onLoad;
      img.src = src;
    });

    const fallback = setTimeout(() => {
      if (cancelled) return;
      cancelled = true;
      setIsLoading(false);
    }, 10000);

    return () => {
      cancelled = true;
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = (e?: HashChangeEvent) => {
      // Save scroll position for the previous page
      if (e) {
        const oldHash = new URL(e.oldURL).hash || "#home";
        scrollPositions.current[oldHash] = window.scrollY;
      }

      const scrollToSaved = (hash: string) => {
        const saved = scrollPositions.current[hash];
        if (saved !== undefined && saved > 0) {
          requestAnimationFrame(() => window.scrollTo(0, saved));
        } else {
          window.scrollTo(0, 0);
        }
      };

      const hash = window.location.hash;

      // Handle contact - scroll to footer without changing view
      if (hash === "#contact") {
        setTimeout(() => {
          const footer = document.getElementById("footer");
          footer?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return;
      }

      // Handle about page and member subpages
      if (hash === "#about") {
        setCurrentView("about");
        setSelectedMemberId(null);
        scrollToSaved(hash);
      } else if (hash.startsWith("#about/member/")) {
        const memberId = parseInt(hash.replace("#about/member/", ""));
        if (!isNaN(memberId)) {
          setCurrentView("aboutMember");
          setSelectedMemberId(memberId);
          window.scrollTo(0, 0);
        }
      }
      // Handle blog
      else if (hash === "#blog") {
        setCurrentView("blog");
        setSelectedPostId(null);
        scrollToSaved(hash);
      } else if (hash.startsWith("#blog/")) {
        const postId = parseInt(hash.replace("#blog/", ""));
        if (!isNaN(postId)) {
          setCurrentView("blogPost");
          setSelectedPostId(postId);
          window.scrollTo(0, 0);
        }
      }
      // Handle events
      else if (hash === "#events") {
        setCurrentView("events");
        setSelectedEventId(null);
        scrollToSaved(hash);
      } else if (hash.startsWith("#events/")) {
        const eventId = parseInt(hash.replace("#events/", ""));
        if (!isNaN(eventId)) {
          setCurrentView("eventDetail");
          setSelectedEventId(eventId);
          window.scrollTo(0, 0);
        }
      }
      // Handle courses
      else if (hash === "#courses") {
        setCurrentView("courses");
        setSelectedCourseId(null);
        scrollToSaved(hash);
      } else if (hash.startsWith("#courses/")) {
        const courseId = parseInt(hash.replace("#courses/", ""));
        if (!isNaN(courseId)) {
          setCurrentView("courseDetail");
          setSelectedCourseId(courseId);
          window.scrollTo(0, 0);
        }
      }
      // Handle publications
      else if (hash === "#publications") {
        setCurrentView("publications");
        setSelectedPublicationId(null);
        scrollToSaved(hash);
      } else if (hash.startsWith("#publications/")) {
        const publicationId = parseInt(hash.replace("#publications/", ""));
        if (!isNaN(publicationId)) {
          setCurrentView("publicationDetail");
          setSelectedPublicationId(publicationId);
          window.scrollTo(0, 0);
        }
      }
      // Handle license
      else if (hash === "#license") {
        setCurrentView("license");
        scrollToSaved(hash);
      }
      // Handle projects
      else if (hash === "#projects") {
        setCurrentView("projects");
        setSelectedProjectId(null);
        scrollToSaved(hash);
      } else if (hash.startsWith("#projects/")) {
        const projectId = parseInt(hash.replace("#projects/", ""));
        if (!isNaN(projectId)) {
          setCurrentView("projectDetail");
          setSelectedProjectId(projectId);
          window.scrollTo(0, 0);
        }
      }
      // Handle home
      else if (hash === "" || hash === "#" || hash === "#home") {
        setCurrentView("home");
        setSelectedPostId(null);
        setSelectedProjectId(null);
        setSelectedCourseId(null);
        setSelectedEventId(null);
        setSelectedMemberId(null);
        scrollToSaved("#home");
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Navigation handlers
  const handlePostClick = (postId: number) => {
    window.location.hash = `#blog/${postId}`;
  };

  const handleBackToBlog = () => {
    window.location.hash = "#blog";
  };

  const handleProjectClick = (projectId: number) => {
    window.location.hash = `#projects/${projectId}`;
  };

  const handleBackToProjects = () => {
    window.location.hash = "#projects";
  };

  const handleCourseClick = (courseId: number) => {
    window.location.hash = `#courses/${courseId}`;
  };

  const handleBackToCourses = () => {
    window.location.hash = "#courses";
  };

  const handlePublicationClick = (publicationId: number) => {
    window.location.hash = `#publications/${publicationId}`;
  };

  const handleBackToPublications = () => {
    window.location.hash = "#publications";
  };

  const handleEventClick = (eventId: number) => {
    window.location.hash = `#events/${eventId}`;
  };

  const handleBackToEvents = () => {
    window.location.hash = "#events";
  };

  const handleMemberClick = (memberId: number) => {
    window.location.hash = `#about/member/${memberId}`;
  };

  const handleBackToAbout = () => {
    window.location.hash = "#about";
  };

  const handleViewAllEvents = () => {
    window.location.hash = "#events";
  };

  const handleViewAllPosts = () => {
    window.location.hash = "#blog";
  };

  const handleViewAllCourses = () => {
    window.location.hash = "#courses";
  };

  // Get selected items
  const selectedPost = selectedPostId
    ? blogPosts.find(post => post.id === selectedPostId)
    : null;

  const selectedProject = selectedProjectId
    ? projects.find(project => project.id === selectedProjectId)
    : null;

  const selectedCourse = selectedCourseId
    ? courses.find(course => course.id === selectedCourseId)
    : null;

  const selectedEvent = selectedEventId
    ? events.find(event => event.id === selectedEventId)
    : null;

  const selectedMember = selectedMemberId
    ? members.find(member => member.id === selectedMemberId)
    : null;

  const selectedPublication = selectedPublicationId
    ? publications.find(publication => publication.id === selectedPublicationId)
    : null;

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent
          currentView={currentView}
          isLoading={isLoading}
          loadProgress={loadProgress}
          selectedPost={selectedPost}
          selectedProject={selectedProject}
          selectedCourse={selectedCourse}
          selectedEvent={selectedEvent}
          selectedMember={selectedMember}
          selectedPublication={selectedPublication}
          onPostClick={handlePostClick}
          onBackToBlog={handleBackToBlog}
          onProjectClick={handleProjectClick}
          onBackToProjects={handleBackToProjects}
          onCourseClick={handleCourseClick}
          onBackToCourses={handleBackToCourses}
          onEventClick={handleEventClick}
          onBackToEvents={handleBackToEvents}
          onMemberClick={handleMemberClick}
          onBackToAbout={handleBackToAbout}
          onPublicationClick={handlePublicationClick}
          onBackToPublications={handleBackToPublications}
          onViewAllEvents={handleViewAllEvents}
          onViewAllPosts={handleViewAllPosts}
          onViewAllCourses={handleViewAllCourses}
        />
      </LanguageProvider>
    </ThemeProvider>
  );
}

interface AppContentProps {
  currentView: ViewType;
  isLoading: boolean;
  loadProgress: number;
  selectedPost: typeof blogPosts[0] | null;
  selectedProject: typeof projects[0] | null;
  selectedCourse: typeof courses[0] | null;
  selectedEvent: typeof events[0] | null;
  selectedMember: typeof members[0] | null;
  selectedPublication: typeof publications[0] | null;
  onPostClick: (id: number) => void;
  onBackToBlog: () => void;
  onProjectClick: (id: number) => void;
  onBackToProjects: () => void;
  onCourseClick: (id: number) => void;
  onBackToCourses: () => void;
  onEventClick: (id: number) => void;
  onBackToEvents: () => void;
  onMemberClick: (id: number) => void;
  onBackToAbout: () => void;
  onPublicationClick: (id: number) => void;
  onBackToPublications: () => void;
  onViewAllEvents: () => void;
  onViewAllPosts: () => void;
  onViewAllCourses: () => void;
}

function AppContent({
  currentView,
  isLoading,
  loadProgress,
  selectedPost,
  selectedProject,
  selectedCourse,
  selectedEvent,
  selectedMember,
  selectedPublication,
  onPostClick,
  onBackToBlog,
  onProjectClick,
  onBackToProjects,
  onCourseClick,
  onBackToCourses,
  onEventClick,
  onBackToEvents,
  onMemberClick,
  onBackToAbout,
  onPublicationClick,
  onBackToPublications,
  onViewAllEvents,
  onViewAllPosts,
  onViewAllCourses,
}: AppContentProps) {
  const { language } = useLanguage();

  const t = {
    home: { en: "Home", es: "Inicio" },
    blog: { en: "Blog", es: "Blog" },
    events: { en: "Events", es: "Eventos" },
    courses: { en: "Courses", es: "Cursos" },
    projects: { en: "Projects", es: "Proyectos" },
    about: { en: "About", es: "Acerca de" },
    publications: { en: "Publications", es: "Publicaciones" },
    license: { en: "License", es: "Licencia" },
    homeDesc: {
      en: "Free Software Research and Development Laboratory at FI UNAM. We promote free and open technologies through projects, courses, events, and publications.",
      es: "Laboratorio de Investigación y Desarrollo de Software Libre en la FI UNAM. Promovemos tecnologías libres y abiertas mediante proyectos, cursos, eventos y publicaciones.",
    },
  };

  const seoProps = (() => {
    switch (currentView) {
      case "home":
        return { title: t.home[language], description: t.homeDesc[language] };
      case "blog":
        return { title: t.blog[language], description: t.homeDesc[language] };
      case "blogPost":
        return selectedPost
          ? { title: selectedPost.title[language], description: selectedPost.excerpt[language], type: "article" as const }
          : { title: t.blog[language], description: t.homeDesc[language] };
      case "events":
        return { title: t.events[language], description: t.homeDesc[language] };
      case "eventDetail":
        return selectedEvent
          ? { title: selectedEvent.title[language], description: selectedEvent.summary?.[language] || t.homeDesc[language] }
          : { title: t.events[language], description: t.homeDesc[language] };
      case "courses":
        return { title: t.courses[language], description: t.homeDesc[language] };
      case "courseDetail":
        return selectedCourse
          ? { title: selectedCourse.title[language], description: selectedCourse.shortDescription?.[language] || t.homeDesc[language] }
          : { title: t.courses[language], description: t.homeDesc[language] };
      case "projects":
        return { title: t.projects[language], description: t.homeDesc[language] };
      case "projectDetail":
        return selectedProject
          ? { title: selectedProject.title[language], description: selectedProject.shortDescription?.[language] || t.homeDesc[language] }
          : { title: t.projects[language], description: t.homeDesc[language] };
      case "about":
        return { title: t.about[language], description: t.homeDesc[language] };
      case "aboutMember":
        return selectedMember
          ? { title: selectedMember.name, description: t.homeDesc[language] }
          : { title: t.about[language], description: t.homeDesc[language] };
      case "publications":
        return { title: t.publications[language], description: t.homeDesc[language] };
      case "publicationDetail":
        return selectedPublication
          ? { title: selectedPublication.title[language], description: selectedPublication.abstract?.[language] || t.homeDesc[language] }
          : { title: t.publications[language], description: t.homeDesc[language] };
      case "license":
        return { title: t.license[language], description: t.homeDesc[language] };
      default:
        return { title: t.home[language], description: t.homeDesc[language] };
    }
  })();

  return (
    <>
      <SEO {...seoProps} />
      <OrganizationSchema />
      {isLoading ? (
        <LoadingScreen progress={loadProgress} />
      ) : null}
      <div className={`min-h-screen ${isLoading ? "hidden" : ""}`}>
        <CursorEffect />
        <Header />
        {currentView === "blogPost" && selectedPost ? (
          <BlogPost post={selectedPost} onBack={onBackToBlog} onMemberClick={onMemberClick} />
        ) : currentView === "blog" ? (
          <Blog onPostClick={onPostClick} />
        ) : currentView === "eventDetail" && selectedEvent ? (
          <EventDetail event={selectedEvent} onBack={onBackToEvents} onMemberClick={onMemberClick} />
        ) : currentView === "events" ? (
          <Events onEventClick={onEventClick} />
        ) : currentView === "courseDetail" && selectedCourse ? (
          <CourseDetail course={selectedCourse} onBack={onBackToCourses} />
        ) : currentView === "courses" ? (
          <Courses onCourseClick={onCourseClick} />
        ) : currentView === "publications" ? (
          <Publications onPublicationClick={onPublicationClick} />
        ) : currentView === "publicationDetail" && selectedPublication ? (
          <PublicationDetail publication={selectedPublication} onBack={onBackToPublications} />
        ) : currentView === "projectDetail" && selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={onBackToProjects} />
        ) : currentView === "projects" ? (
          <Projects onProjectClick={onProjectClick} />
        ) : currentView === "aboutMember" && selectedMember ? (
          <AboutMember member={selectedMember} onBack={onBackToAbout} />
        ) : currentView === "about" ? (
          <About onMemberClick={onMemberClick} />
        ) : currentView === "license" ? (
          <License />
        ) : (
          <>
            <Hero />
            <Values />
            <FeaturedProjects />
            <LatestHighlights
              onViewPost={onPostClick}
              onViewAllPosts={() => { window.location.hash = "#blog"; }}
              onViewCourse={onCourseClick}
              onViewAllCourses={onViewAllCourses}
              onViewEvent={onEventClick}
              onViewAllEvents={onViewAllEvents}
            />
            <Community />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}
