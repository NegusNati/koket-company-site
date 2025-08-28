import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { projectsData } from '@/utils/constant'

function ProjectsSection({staggerContainer, fadeInUp}: {staggerContainer: {}, fadeInUp: {}}) {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-block px-4 py-1 rounded-full bg-chetwode text-white dark:text-white text-sm font-medium mb-4 shadow-sm"
        >
          Our Portfolio
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Showcasing Our Excellence
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-foreground/80"
        >
          Explore successful projects demonstrating our commitment to
          quality and innovation.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-card border border-border"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              {" "}
              {/* Use muted for placeholder */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <div className="space-y-1 transform transition-transform duration-300 group-hover:-translate-y-10">
                <span className="text-xs font-medium text-white/80">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-white group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
              </div>
              {/* Button appears on hover */}
              <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full bg-white/10 text-white border-white/30 hover:bg-green-500/20 hover:text-white backdrop-blur-sm"
                >
                  View Details <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>
              <span
                className={cn(
                  "absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full font-medium z-10", // Status badge positioned top-right
                  project.status === "Completed"
                    ? "bg-green-500/20 text-green-300"
                    : "bg-gold/20 text-gold"
                )}
              >
                {project.status}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-16">
        <Button variant="ghost" size="lg" className=' bg-green-500/20 hover:bg-gold/20 ease-in-out duration-300 backdrop-blur-sm'>
          View All Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
  )
}

export default ProjectsSection;
