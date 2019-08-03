export interface UserData {
    category: number;
    commentsCount: string;
    name: string;
    postComments: [
        {
            Comment: string;
            commentUserPic: string;
            reply: [
                {
                    replyLikeAndDislike: string;
                    replyUser: string;
                    replyUserName: string;
                    replyUserPhoto: string;
                    secondLevelReply: [
                        {
                            secondReplyLikeAndDislike: string;
                            secondReplyUser: string;
                            secondReplyUserName: string;
                            secondReplyUserPhoto: string;
                        },
                        {
                            secondReplyLikeAndDislike: string;
                            secondReplyUser: string;
                            secondReplyUserName: string;
                            secondReplyUserPhoto: string;
                        },
                        {
                            secondReplyLikeAndDislike: string;
                            secondReplyUser: string;
                            secondReplyUserName: string;
                            secondReplyUserPhoto: string;
                        }
                    ]
                },
                {
                    replyLikeAndDislike: string;
                    replyUser: string;
                    replyUserName: string;
                    replyUserPhoto: string;
                },
                {
                    replyLikeAndDislike: string;
                    replyUser: string;
                    replyUserName: string;
                    replyUserPhoto: string;
                }
            ]
        },
        {
            Comment: string,
            commentUserPic: string,
            reply: [
                {
                    replyLikeAndDislike: string;
                    replyUser: string;
                    replyUserName: string;
                    replyUserPhoto: string;
                },
                {
                    replyLikeAndDislike: string;
                    replyUser: string;
                    replyUserName: string;
                    replyUserPhoto: string;
                },
                {
                    replyLikeAndDislike: string;
                    replyUser: string;
                    replyUserName: string;
                    replyUserPhoto: string;
                }
            ]
        }
    ];
    postLikeCount: string;
    postSharingCount: string;
    postTime: string;
    postTypeContent: string;
    postTypeImg: string;
    profileImage: string;

}
