import React from 'react';

const ResumeCont = () => {
    return (
        <div className="resume_cont">
            <div className="resume_row">
                <p className="resume_header">Skills</p>
                <div className="resume_column">
                    
                    <div className="list_header">
                        <p className="primary_list_text">Software Engineering</p>
                    </div>
                    <div className="resume_body">
                        <div className="resume_list">
                            <p className="secondary_list_text">Full-Stack Development</p>
                            <p className="secondary_list_text">Web + Application Design</p>
                            <p className="secondary_list_text">Web Server Implementation</p>
                        </div>
                        <div className="resume_list">
                            <p className="secondary_list_text">Data Analysis + Visualization</p>
                            <p className="secondary_list_text">Data Structures + Management</p>

                        </div>
                    </div>
                </div>
                <div className="resume_column">
                    <div className="list_header">
                        <p className="primary_list_text">Landscape Architecture</p>
                    </div>
                    <div className="resume_body">
                        <div className="resume_list">
                            <p className="secondary_list_text">Planting + Garden Design</p>
                            <p className="secondary_list_text">Single Family Residential</p>
                            <p className="secondary_list_text">Multifamily + Commercial</p>
                        </div>
                        <div className="resume_list">
                            <p className="secondary_list_text">Park + Campus Design</p>
                            <p className="secondary_list_text">Planting + Garden Design</p>
                            <p className="secondary_list_text">Construction Documentation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume_row">
                <p className="resume_header">Education</p>
                <div className="resume_body">
                    <div className="resume_column">
                        <p className="primary_list_text">University of Wisconsin - Madison</p>
                        <p className="secondary_list_text">BS - Landscape Architecture</p>
                        <p className="secondary_list_text">Certificate of Fine Art - Sculpture</p>
                    </div>
                    <div className="resume_column">
                        <p className="primary_list_text">University of Colorado - Boulder*</p>
                            <p className="secondary_list_text">BS - Applied Computer Science</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

/*
    <div className="resume_cont">
        <div className="list_column">
            <ul className="resume_list">
                <li className="list_header">Education:</li>
                <li className="primary_list_text" >University of Wisconsin - Madison</li>
                    <li className="secondary_list_text">BS - Landscape Architecture</li>
                    <li className="secondary_list_text">Certificate of Fine Art - Sculpture</li>
            </ul>
            <ul className="resume_list">
                <li className="primary_list_text">University of Colorado - Boulder*</li>
                    <li className="secondary_list_text">BS - Applied Computer Science</li>
            </ul>
        </div>
        <div className="list_column">
            <ul className="resume_list">
                <li className="list_header">Professional Skills:</li>
                <li className="primary_list_text">Software Engineering</li>
                    <li className="secondary_list_text">Full-Stack Development</li>
                    <li className="secondary_list_text">Data Analysis + Visualization</li>
                    <li className="secondary_list_text">Data Structures + Management</li>
                <li className="primary_list_text">Landscape Architecture</li>
                    <li className="secondary_list_text">Planting + Garden Design</li>
                    <li className="secondary_list_text">MultiFamily + Residential Design</li>
                    <li className="secondary_list_text">Park + Campus Design</li>
                    <li className="secondary_list_text">Construction Documentation</li>
            </ul>
        </div>
        <div className="list_column">
            <ul className="resume_list">
                <li className="list_header"></li>
                <li className="primary_list_text">Landscape Architecture</li>
                    <li className="secondary_list_text">Planting + Garden Design</li>
                    <li className="secondary_list_text">MultiFamily + Residential Design</li>
                    <li className="secondary_list_text">Park + Campus Design</li>
                    <li className="secondary_list_text">Construction Documentation</li>
            </ul>
        </div>
    </div>
*/

export default ResumeCont;
