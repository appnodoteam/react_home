import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const now = new Date();
// now 9:00 am
const today =  new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0);
const currentDate = today.toISOString();
function addHours(date: Date, hours: number) {
    const copy = new Date(date.getTime());
    copy.setMinutes(date.getMinutes() + hours * 60);
    return copy.toISOString();
}
const schedulerData = [
    { startDate: today.toISOString(), endDate: addHours(today, 0.75), title: 'Reunión de equipo ####' },
    { startDate: addHours(today, 1), endDate: addHours(today, 1.5), title: 'Reunion de inicio ####' },
    { startDate: addHours(today, 2), endDate: addHours(today, 2.7), title: 'Presentación de Proyecto #####' },
];

// function addDate(date: Date, days: number) {
//     schedulerData.push({ startDate: addHours(date, days), endDate: addHours(date, days + 0.75), title: 'Reunión de equipo ####' });
//
// }
function Calendar() {
    return (
        <div className={"rounded-xl overflow-hidden"}>
            <Paper>
                <Scheduler
                    data={schedulerData}
                >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <DayView
                        startDayHour={9}
                        endDayHour={16}
                    />
                    <Appointments />
                </Scheduler>
            </Paper>
        </div>
    )
}

export default Calendar;