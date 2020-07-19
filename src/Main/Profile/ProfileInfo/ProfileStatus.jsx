import React, { useState, useEffect } from 'react';


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    let statusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={statusChange} autoFocus={true} type="text" onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>
    )
}


export default ProfileStatus




/*class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)
    }

    statusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.statusChange} autoFocus={true} type="text" value={this.state.status || ' Write your status'} onBlur={this.deactivateEditMode} />
                    </div>
                }
            </div>
        )
    }
}*/