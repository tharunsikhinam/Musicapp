/**
 * Created by quikr on 7/13/16.
 */
import React, {PropTypes} from 'react';

//Purely Presentational Component

const CourseList = ({courses}) => {

  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course => {
        return <CourseListRow key={course.id} course={course} />;
      }
      )}
      </tbody>
    </table>

  );

};
