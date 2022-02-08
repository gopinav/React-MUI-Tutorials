import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab'
export const MuiTimeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          10:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          10:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          09:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
