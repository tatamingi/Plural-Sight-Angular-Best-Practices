import { Component, OnInit } from '@angular/core';

import { UserRepositoryService } from '../services/user-repository.service';
import { CatalogRepositoryService } from './catalog-repository.service';

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {
  classes: any[];
  visibleClasses: any[];

  constructor(
    private catalogRepository: CatalogRepositoryService,
    private userRepository: UserRepositoryService,
  ) {
  }

  ngOnInit() {
    this.catalogRepository.getCatalog()
      .subscribe(classes => {
        this.classes = classes;
        this.applyFilter('');
      });
  }

  enroll(classToEnroll) {
    classToEnroll.processing = true;
    this.userRepository.enroll(classToEnroll.classId)
      .subscribe(
        null,
        (err) => {
          console.error(err);
          classToEnroll.processing = false;
        }, //add a toast message or something
        () => {
          classToEnroll.processing = false;
          classToEnroll.enrolled = true;
        },
      );
  }

  drop(classToDrop) {
    classToDrop.processing = true;
    this.userRepository.drop(classToDrop.classId)
      .subscribe(
        null,
        (err) => {
          console.error(err);
          classToDrop.processing = false;
        }, //add a toast message or something
        () => {
          classToDrop.processing = false;
          classToDrop.enrolled = false;
        }
      );
  }

  applyFilter(filter) {
    if (!filter) {
      return this.visibleClasses = this.classes;
    }

    if (filter === 'GEN') {
      return this.showGeneralCourses();
    }

    return this.visibleClasses = this.classes.filter(c => c.course.courseNumber.startsWith(filter));
  }

  showGeneralCourses() {
    this.visibleClasses = this.classes.filter(c =>
      !c.course.courseNumber.startsWith('CH') &&
      !c.course.courseNumber.startsWith('PO') &&
      !c.course.courseNumber.startsWith('SP'));
  }
}
