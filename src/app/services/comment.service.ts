import {CommentModel} from '../../models/comment.model';

export class ProjectionService {

    static getComments(): CommentModel[] {
        if (!localStorage.getItem('comments')) {

            const arr: CommentModel[] = [
                {
                    commentId: 1,
                    movieId: 1,
                    userId: 'user_123',
                    comment: 'Absolutely loved this movie! The story was so captivating.',
                    createdAt: '2025-10-01T10:15:30Z'
                },
                {
                    commentId: 2,
                    movieId: 7,
                    userId: 'user_456',
                    comment: 'Not what I was expecting, but still a decent watch.',
                    createdAt: '2025-10-03T14:50:45Z'
                },
                {
                    commentId: 3,
                    movieId: 9,
                    userId: 'user_789',
                    comment: 'The acting was top-notch. The lead really sold their character!',
                    createdAt: '2025-10-05T08:20:10Z'
                },
                {
                    commentId: 4,
                    movieId: 4,
                    userId: 'user_234',
                    comment: 'Couldn’t get enough of the special effects. Stunning visuals!',
                    createdAt: '2025-09-30T16:35:00Z'
                },
                {
                    commentId: 5,
                    movieId: 7,
                    userId: 'user_567',
                    comment: 'Interesting plot twists, but the pacing was a little slow.',
                    createdAt: '2025-10-02T12:25:15Z'
                },
                {
                    commentId: 6,
                    movieId: 17,
                    userId: 'user_891',
                    comment: 'This is my new favorite movie of the year. Highly recommend it!',
                    createdAt: '2025-10-04T18:40:25Z'
                }

            ];

            localStorage.setItem('projections', JSON.stringify(arr));
        }

        return JSON.parse(localStorage.getItem('comments')!);
    }

    static getCommentById(id: number) {
        return this.getComments().find(comment=>comment.commentId === id)
    }



}
