const Employee = () => {

    const  empData = [
        {empId : 1001,empName:'srini',empEmail:'srini@gmail.com'},
        {empId : 1002,empName: 'navin',empEmail:'navin@gmail.com'},
        {empId : 1003,empName: 'nikhil',empEmail:'nikhil@gmail.com'}
    ];

    return(
        <div>   
                <h1 className="text-center">All Employee Details</h1>
                <table className="table table-bordered">
                    <thead className="thread-dark">
                        <tr>
                        <th>Emp Id</th>
                        <th>Emp Name</th>
                        <th>Emp Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        empData.map((employee) => (  
                        
                        <tr>
                        <td>{employee.empId}</td>
                        <td>{employee.empName}</td>
                        <td>{employee.empEmail}</td>
                        </tr>
                         ))
                        }
                    </tbody>
                    </table>

        </div>
    )
}
export default Employee;