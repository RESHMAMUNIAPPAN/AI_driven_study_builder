import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-study-plan',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './studyplan.component.html',
  styleUrls: ['./studyplan.component.css']
})
export class StudyPlanComponent {
  studyPlan: any = null;
  refinedStudyPlan: any = null;
  studyMaterials: string[] = [];
  dailyQuiz: string[] = [];

  private topic: string = '';
  private time: number = 1;
  private complexity: string = 'beginner';
  private language: string = 'English';

  // Function to handle topic input change
  onTopicChange(topic: string): void {
    this.topic = topic;
  }

  // Function to handle time input change
  onTimeChange(time: string): void {
    this.time = parseInt(time, 10) || 1;
  }

  // Function to handle complexity input change
  onComplexityChange(complexity: string): void {
    this.complexity = complexity;
  }

  // Function to handle language input change
  onLanguageChange(language: string): void {
    this.language = language;
  }

  // Function to generate an initial study plan
  generateStudyPlan(): void {
    if (this.topic) {
      this.studyPlan = {
        topic: this.topic,
        timePerDay: this.time,
        complexity: this.complexity,
        language: this.language,
        subtopics: ['Introduction', 'Core Concepts', 'Advanced Topics']
      };
      this.studyMaterials = ['Article 1', 'Video 1', 'Course 1'];
      this.generateDailyQuiz();
    } else {
      alert("Please enter a topic to generate a study plan.");
    }
  }

  // Function to refine the study plan based on user input
  refineStudyPlan(): void {
    if (this.studyPlan) {
      this.refinedStudyPlan = {
        ...this.studyPlan,
        timePerDay: this.time,
        complexity: this.complexity,
        language: this.language,
        subtopics: ['Updated Introduction', 'Updated Core Concepts', 'Updated Advanced Topics']
      };
    }
  }

  // Function to skip suggested materials
  skipMaterials(): void {
    this.studyMaterials = [];
  }

  // Function to generate a daily quiz based on the study plan
  generateDailyQuiz(): void {
    this.dailyQuiz = [
      'What is the main idea of the topic?',
      'Explain a core concept in your own words.',
      'What is one advanced application of the topic?'
    ];
  }

  // Function to submit the quiz
  submitQuiz(): void {
    alert('Quiz Submitted!');
  }
}