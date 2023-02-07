import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function Search_list() {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [selectedGraduationYear, setSelectedGraduationYear] = useState(null);
    const [selectedEmploymentStatus, setSelectedEmploymentStatus] = useState(null);
    const [selectedOccupation, setSelectedOccupation] = useState(null);
    const [data, setData] = useState([{}]);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const handleCollegeSelect = event => {
        setSelectedCollege(event.target.value);
    };

    const handleGraduationYearSelect = event => {
        setSelectedGraduationYear(event.target.value);
    };

    const handleEmploymentStatusSelect = event => {
        setSelectedEmploymentStatus(event.target.value);
    };

    const handleOccupationSelect = event => {
        setSelectedOccupation(event.target.value);
    };
    let colleges,graduationYears,employmentStatuses,occupations;
    const filteredData = data.filter(item => {
        const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const collegeMatch =
            selectedCollege === null || item.college === selectedCollege;
        const graduationYearMatch =
            selectedGraduationYear === null || item.graduationYear === selectedGraduationYear;
        const employmentStatusMatch =
            selectedEmploymentStatus === null || item.employmentStatus === selectedEmploymentStatus;
        const occupationMatch =
            selectedOccupation === null || item.occupation === selectedOccupation;
        return searchMatch && collegeMatch && graduationYearMatch && employmentStatusMatch && occupationMatch;
    });

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch} />
            <select value={selectedCollege} onChange={handleCollegeSelect}>
                <option value={null}>All Colleges</option>
                {colleges.map(college => (
                    <option key={college} value={college}>
                        {college}
                    </option>
                ))}
            </select>
            <select value={selectedGraduationYear} onChange={handleGraduationYearSelect}>
                <option value={null}>All Graduation Years</option>
                {graduationYears.map(graduationYear => (
                    <option key={graduationYear} value={graduationYear}>
                        {graduationYear}
                    </option>
                ))}
            </select>
            <select value={selectedEmploymentStatus} onChange={handleEmploymentStatusSelect}>
                <option value={null}>All Employment</option>
                {employmentStatuses.map(status => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
            </select>
            <select value={selectedOccupation} onChange={handleOccupationSelect}>
                <option value={null}>All Occupation</option>
                {occupations.map(occupation => (
                    <option key={occupation} value={occupation}>
                        {occupation}
                    </option>
                ))}
            </select>
            <div>
                <ul>
                    {filteredData.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.college} - {item.graduationYear} - {item.employmentStatus} - {item.occupation}
                        </li>
                    ))}
                </ul>
            </div>



        </div >)

}
export default Search_list;