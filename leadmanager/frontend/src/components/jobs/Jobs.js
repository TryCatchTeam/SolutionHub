import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJobs } from '../../actions/jobs';
import axios from 'axios';

export class Jobs extends Component {
    static propTypes = {
        jobs: PropTypes.array.isRequired,
        getJobs: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getJobs();
    }

    render() {
        return (
        <Fragment>
            <h2>Jobs</h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.jobs.map(job => (
                        <tr key={job.id}>
                            <td>{job.id}</td>
                            <td>{job.title}</td>
                            <td>{job.description}</td>
                            <td>{job.skill}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs.jobs
});

export default connect(mapStateToProps, { getJobs })(Jobs);