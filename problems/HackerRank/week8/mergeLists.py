def newNode(data):
    n = SinglyLinkedListNode(data)
    n.next = None
    return n

def mergeLists(head1, head2):
    
    if not head1:
        return head2
    
    if not head2:
        return head1
    
    dummy = SinglyLinkedListNode(-1)
    dummy.next = None;
    curr = dummy
    
    while head1 and head2:
        if head1.data < head2.data:
            new = newNode(head1.data)
            head1 = head1.next
            curr.next = new
        else:
            new = newNode(head2.data)
            head2 = head2.next
            curr.next = new
            
        curr = curr.next
            
    while head1:
        new = newNode(head1.data)
        head1 = head1.next
        curr.next = new
        curr = curr.next
        
    while head2:
        new = newNode(head2.data)
        head2 = head2.next
        curr.next = new
        curr = curr.next
        
    return dummy.next


def mergeLists2(head1, head2):
    # Base cases
    if head1 is None:
        return head2
    if head2 is None:
        return head1

    # Pick the smaller head, recur on the rest
    if head1.data < head2.data:
        head1.next = mergeLists(head1.next, head2)
        return head1
    else:
        head2.next = mergeLists(head1, head2.next)
        return head2