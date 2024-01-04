using LineCareLandingPage.Models;

namespace LineCareLandingPage.ViewModels;

public class CoursesViewModel
{
    private IEnumerable<Course> _coursesList = new List<Course>();
    public IEnumerable<Course> Courses { get => _coursesList; }

    public CoursesViewModel()
    {
        AddCourse("A", "B");
        AddCourse("B", "C");
        AddCourse("C", "D");
        AddCourse("C", "D");
    }

    public void AddCourse(string name, string description)
    {
        Course course = new()
        {
            Id = new Random().Next(1, 100),
            Name = name,
            Description = description,
        };

        _coursesList = _coursesList.Append(course);
    }
}
