import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const Blog = () => {
  const recentPosts = [
    { id: 1, title: "How to ace your technical interview", date: "2023-06-01" },
    { id: 2, title: "Top 5 programming languages to learn in 2023", date: "2023-05-28" },
    { id: 3, title: "Building a strong portfolio for software engineers", date: "2023-05-25" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Blog Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.id} className="border-b pb-2 last:border-b-0">
              <h3 className="font-medium">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </li>
          ))}
        </ul>
        <Button className="w-full mt-4">Create New Post</Button>
      </CardContent>
    </Card>
  );
};

export default Blog;
