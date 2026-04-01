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
import { useState, useEffect } from "react";
import { blogPosts } from "./data/blogPosts";
import { projects } from "./data/projects";
import { courses } from "./data/courses";
import { events } from "./data/events";
import { members } from "./data/members";
import { publications } from "./data/publications";

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

  useEffect(() => {
    const handleHashChange = () => {
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
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
      }
      // Handle projects
      else if (hash === "#projects") {
        setCurrentView("projects");
        setSelectedProjectId(null);
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
        <div className="min-h-screen">
          <CursorEffect />
          <Header />
          {currentView === "blogPost" && selectedPost ? (
            <BlogPost post={selectedPost} onBack={handleBackToBlog} onMemberClick={handleMemberClick} />
          ) : currentView === "blog" ? (
            <Blog onPostClick={handlePostClick} />
          ) : currentView === "eventDetail" && selectedEvent ? (
            <EventDetail event={selectedEvent} onBack={handleBackToEvents} />
          ) : currentView === "events" ? (
            <Events onEventClick={handleEventClick} />
          ) : currentView === "courseDetail" && selectedCourse ? (
            <CourseDetail course={selectedCourse} onBack={handleBackToCourses} />
          ) : currentView === "courses" ? (
            <Courses onCourseClick={handleCourseClick} />
          ) : currentView === "publications" ? (
            <Publications onPublicationClick={handlePublicationClick} />
          ) : currentView === "publicationDetail" && selectedPublication ? (
            <PublicationDetail publication={selectedPublication} onBack={handleBackToPublications} />
          ) : currentView === "projectDetail" && selectedProject ? (
            <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
          ) : currentView === "projects" ? (
            <Projects onProjectClick={handleProjectClick} />
          ) : currentView === "aboutMember" && selectedMember ? (
            <AboutMember member={selectedMember} onBack={handleBackToAbout} />
          ) : currentView === "about" ? (
            <About onMemberClick={handleMemberClick} />
          ) : currentView === "license" ? (
            <License />
          ) : (
            <>
              <Hero />
              <Values />
              <FeaturedProjects />
              <LatestHighlights 
                onViewPost={handlePostClick}
                onViewAllPosts={() => { window.location.hash = "#blog"; }}
                onViewCourse={handleCourseClick}
                onViewAllCourses={handleViewAllCourses}
                onViewEvent={handleEventClick}
                onViewAllEvents={handleViewAllEvents}
              />
              <Community />
            </>
          )}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}