import jsPDF from 'jspdf';
import { skills } from '../data/skills';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import { socialLinks } from '../data/socialLinks';

// Personal information
const personalInfo = {
  name: 'Omkar Soni',
  email: 'omkarsoni7277@gmail.com',
  location: 'Bhilai, Chhattisgarh, India',
  phone: '+91-XXXXXXXXXX', // Add your phone number here
  title: 'Startup Founder | Developer | Educator',
  objective: 'B.Tech IT student and co-founder of Techserve Nexus, passionate about delivering innovative digital solutions to MSMEs and startups. Experienced in full-stack development, education, and video editing.'
};

// Education information
const education = [
  {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'RCET Bhilai, Chhattisgarh',
    duration: '2023 - 2027',
    status: 'Pursuing'
  }
];

export const generateResumePDF = async (): Promise<void> => {
  try {
    const pdf = new jsPDF();
    
    // Set font
    pdf.setFont('helvetica');
    
    let yPosition = 20;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    
    // Helper function to add new page if needed
    const checkNewPage = (requiredSpace: number = 20): void => {
      if (yPosition + requiredSpace > pdf.internal.pageSize.getHeight() - 20) {
        pdf.addPage();
        yPosition = 20;
      }
    };
    
    // Header - Name and Title
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text(personalInfo.name, margin, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 100, 100);
    pdf.text(personalInfo.title, margin, yPosition);
    yPosition += 15;
    
    // Contact Information
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    const contactInfo = [
      `Email: ${personalInfo.email}`,
      `Location: ${personalInfo.location}`,
      `LinkedIn: ${socialLinks.find(link => link.name === 'LinkedIn')?.url || ''}`,
      `GitHub: ${socialLinks.find(link => link.name === 'GitHub')?.url || ''}`
    ];
    
    contactInfo.forEach((info) => {
      pdf.text(info, margin, yPosition);
      yPosition += 4;
    });
    yPosition += 10;
    
    // Objective Section
    checkNewPage(30);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('OBJECTIVE', margin, yPosition);
    yPosition += 6;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    const objectiveLines = pdf.splitTextToSize(personalInfo.objective, contentWidth);
    pdf.text(objectiveLines, margin, yPosition);
    yPosition += objectiveLines.length * 4 + 10;
    
    // Education Section
    checkNewPage(30);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('EDUCATION', margin, yPosition);
    yPosition += 6;
    
    education.forEach((edu) => {
      checkNewPage(20);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(edu.degree, margin, yPosition);
      yPosition += 5;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`${edu.institution} (${edu.duration})`, margin + 5, yPosition);
      yPosition += 5;
      
      if (edu.status) {
        pdf.setTextColor(100, 100, 100);
        pdf.text(`Status: ${edu.status}`, margin + 5, yPosition);
        pdf.setTextColor(0, 0, 0);
        yPosition += 8;
      }
    });
    yPosition += 5;
    
    // Experience Section
    checkNewPage(40);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('EXPERIENCE', margin, yPosition);
    yPosition += 6;
    
    experiences.forEach((exp) => {
      checkNewPage(25);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(exp.role, margin, yPosition);
      yPosition += 5;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'italic');
      pdf.text(`${exp.company} | ${exp.duration}`, margin + 5, yPosition);
      yPosition += 5;
      
      pdf.setFont('helvetica', 'normal');
      const descLines = pdf.splitTextToSize(exp.description, contentWidth - 10);
      pdf.text(descLines, margin + 5, yPosition);
      yPosition += descLines.length * 4 + 8;
    });
    
    // Skills Section
    checkNewPage(60);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('SKILLS', margin, yPosition);
    yPosition += 6;
    
    // Group skills by category
    const skillCategories = {
      'Technical Skills': skills.filter(skill => skill.category === 'tech'),
      'Tools & Software': skills.filter(skill => skill.category === 'tools'),
      'Soft Skills': skills.filter(skill => skill.category === 'soft')
    };
    
    Object.entries(skillCategories).forEach(([categoryName, categorySkills]) => {
      checkNewPage(15);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(categoryName + ':', margin, yPosition);
      yPosition += 5;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      const skillNames = categorySkills.map(skill => skill.name).join(', ');
      const skillLines = pdf.splitTextToSize(skillNames, contentWidth - 10);
      pdf.text(skillLines, margin + 5, yPosition);
      yPosition += skillLines.length * 4 + 8;
    });
    
    // Projects Section
    checkNewPage(40);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROJECTS', margin, yPosition);
    yPosition += 6;
    
    projects.forEach((project) => {
      checkNewPage(30);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(project.title, margin, yPosition);
      yPosition += 5;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      const projDescLines = pdf.splitTextToSize(project.description, contentWidth - 10);
      pdf.text(projDescLines, margin + 5, yPosition);
      yPosition += projDescLines.length * 4 + 3;
      
      // Technologies used
      pdf.setFont('helvetica', 'italic');
      pdf.setTextColor(100, 100, 100);
      pdf.text('Technologies: ' + project.tags.join(', '), margin + 5, yPosition);
      pdf.setTextColor(0, 0, 0);
      yPosition += 8;
    });
    
    // Vision Statement
    checkNewPage(30);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('VISION', margin, yPosition);
    yPosition += 6;
    
    const visionText = 'My vision is to grow Techserve Nexus into a national technology platform that bridges the digital divide for small and medium businesses across India. Beyond business growth, I am committed to making technology education more accessible through workshops, courses, and mentorship programs.';
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    const visionLines = pdf.splitTextToSize(visionText, contentWidth);
    pdf.text(visionLines, margin, yPosition);
    yPosition += visionLines.length * 4 + 10;    // Footer - Add page numbers and generation date
    let totalPages = 1;
    
    // Calculate total pages first
    pdf.setPage(1);
    while (true) {
      try {
        pdf.setPage(totalPages + 1);
        totalPages++;
      } catch {
        break;
      }
    }
    
    // Add footer to each page
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(150, 150, 150);
      pdf.text(
        `Generated from portfolio - ${new Date().toLocaleDateString()}`,
        margin,
        pdf.internal.pageSize.getHeight() - 10
      );
      pdf.text(
        `Page ${i} of ${totalPages}`,
        pageWidth - margin - 20,
        pdf.internal.pageSize.getHeight() - 10
      );
    }
    
    // Save the PDF
    pdf.save(`${personalInfo.name.replace(' ', '_')}_Resume.pdf`);
    
  } catch (error) {
    console.error('Error generating resume PDF:', error);
    throw new Error('Failed to generate resume. Please try again.');
  }
};

export default generateResumePDF;
